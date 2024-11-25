// 라이브러리
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import PlanDate from 'components/PlanDate';
import Location from 'assets/image/Location';
import Calendar from 'assets/image/Calendar';
import TimeCircle from 'assets/image/TimeCircle';
import { hasDateExpired } from 'lib/utils/hasDateExpired';
import TimePicker from 'components/TimePicker';
import { useMutation } from 'react-query';
import { Plan_Update } from 'lib/apis/Plan';
import Write from 'assets/image/Write';
import { PlanResult } from 'types/plan';
import { schedule } from 'types/schedule';
import { useFlow } from 'stackflow';

interface UpdateParams {
  id: string;
  dayIndex: string;
  timeIndex: string;
  planInfos: PlanResult | undefined;
}

const Update: ActivityComponentType<UpdateParams> = ({ params }) => {
  const { pop } = useFlow();
  const { id, dayIndex, timeIndex, planInfos } = params;

  const [planItem, setPlanItem] = useState<schedule | undefined>(undefined);
  const [isSelected, setIsSelected] = useState<number | null>(
    parseInt(dayIndex)
  );
  const [inputValue, setInputValue] = useState('');

  const [time, setTime] = useState({
    period: '',
    hour: '',
    minute: ''
  });

  if (!planInfos) return null;

  useEffect(() => {
    const dayKey =
      `day${parseInt(dayIndex) + 1}` as keyof typeof planInfos.data;
    const dayData = planInfos.data[dayKey];

    if (Array.isArray(dayData)) {
      const sortedDayData = [...dayData].sort((a, b) => {
        const [aHour, aMinute] = a.time.split(':').map(Number);
        const [bHour, bMinute] = b.time.split(':').map(Number);

        return aHour !== bHour ? aHour - bHour : aMinute - bMinute;
      });

      const data = sortedDayData[parseInt(timeIndex)];
      if (data) {
        setPlanItem(data);
        setInputValue(data.activity);
      }
    }
  }, [planInfos, dayIndex, timeIndex]);

  const periods = ['오전', '오후'];
  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, '0')
  );

  const startDate = new Date(planInfos.startDate);
  const plans = Object.keys(planInfos.data)
    .filter((key) => key !== 'tips')
    .map((key, index) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);
      return {
        day: key,
        date: date.toISOString().split('T')[0]
      };
    });

  const handleSelectDay = (index: number, date: string) => {
    if (!hasDateExpired(date)) {
      setIsSelected(index);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const { mutate: updatedPlanItemMutation } = useMutation(Plan_Update, {
    onSuccess: () => {
      alert('수정 성공!');
      pop();
      pop();
    },
    onError: (error) => {
      console.error('일정 아이템 수정 실패', error);
    }
  });

  const handleUpdatePlan = () => {
    const oldDay =
      `day${parseInt(dayIndex) + 1}` as keyof typeof planInfos.data;
    const selectedDay = `day${isSelected! + 1}` as keyof typeof planInfos.data;

    const isSameDay = selectedDay === oldDay;

    const oldDayPlans = Array.isArray(planInfos.data[oldDay])
      ? planInfos.data[oldDay]
      : [];
    const selectedDayPlans = Array.isArray(planInfos.data[selectedDay])
      ? planInfos.data[selectedDay]
      : [];

    const newPlanItem: schedule = {
      ...planItem!,
      activity: inputValue,
      time: `${time.hour}:${time.minute}`
    };

    const updatedOldDayPlans = isSameDay
      ? oldDayPlans.map((plan, index) =>
          index === parseInt(timeIndex) ? newPlanItem : plan
        )
      : oldDayPlans.filter((_, index) => index !== parseInt(timeIndex));

    const updatedSelectedDayPlans = isSameDay
      ? selectedDayPlans
      : [...selectedDayPlans, newPlanItem];

    const updatedPlans = {
      ...planInfos,
      data: {
        ...planInfos.data,
        [oldDay]: updatedOldDayPlans,
        [selectedDay]: updatedSelectedDayPlans
      }
    };

    updatedPlanItemMutation({ id, data: updatedPlans });
  };

  useEffect(() => {
    if (plans.length === 1) {
      setIsSelected(0);
    }
  }, [plans]);

  useEffect(() => {
    if (planItem) {
      const [hour, minute] = planItem.time.split(':');
      const period = parseInt(hour) < 12 ? '오전' : '오후';
      setTime({
        period,
        hour: String(parseInt(hour) % 12 || 12),
        minute
      });
    }
  }, [planItem]);

  return (
    <AppScreen>
      <Header
        title="수정"
        buttonState="완료"
        onClickMethod={handleUpdatePlan}
      />
      <_.Update_Container>
        <_.Update_Location>
          <Location />
          <_.Update_Address>
            {planItem?.location || '위치가 존재하지 않습니다.'}
            <_.Update_PlanChange>변경</_.Update_PlanChange>
          </_.Update_Address>
        </_.Update_Location>
        <_.Update_SectionLine>
          <_.Update_Subtitle>
            <Write />
            <_.Update_Menu>일정 제목</_.Update_Menu>
          </_.Update_Subtitle>
          <_.Update_Input
            placeholder="일정 제목을 입력하세요! ex) 밥먹기"
            value={inputValue}
            onChange={handleInputChange}
          />
        </_.Update_SectionLine>
        <_.Update_SelectDate>
          <_.Update_Subtitle>
            <Calendar />
            <_.Update_Menu>날짜 선택</_.Update_Menu>
          </_.Update_Subtitle>
          <_.Update_PlanDates>
            {plans.map((plan, index) => (
              <PlanDate
                key={plan.day}
                day={index + 1}
                date={plan.date}
                isSelected={isSelected === index}
                onSelect={() => {
                  handleSelectDay(index, plan.date);
                }}
              />
            ))}
          </_.Update_PlanDates>
        </_.Update_SelectDate>
        <_.Update_SelectTime>
          <_.Update_Subtitle>
            <TimeCircle />
            <_.Update_Menu>시간 선택</_.Update_Menu>
          </_.Update_Subtitle>
          <_.Update_TimePickerList>
            <TimePicker
              list={periods}
              onSelectedChange={(selectedPeriod: string) =>
                setTime((prev) => ({ ...prev, period: selectedPeriod }))
              }
              selectedValue={time.period}
            />
            <TimePicker
              list={hours}
              onSelectedChange={(selectedHour: string) =>
                setTime((prev) => ({ ...prev, hour: selectedHour }))
              }
              selectedValue={time.hour}
            />
            <TimePicker
              list={minutes}
              onSelectedChange={(selectedMinute: string) =>
                setTime((prev) => ({ ...prev, minute: selectedMinute }))
              }
              selectedValue={time.minute}
            />
            <_.Update_Overlay />
          </_.Update_TimePickerList>
        </_.Update_SelectTime>
      </_.Update_Container>
    </AppScreen>
  );
};

export default Update;
