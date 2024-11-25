// 라이브러리
import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import Location from 'assets/image/Location';
import MiniMap from 'components/Maps/MiniMap';
import { Plan_Update } from 'lib/apis/Plan';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { PlanData, PlanResult } from 'types/plan';
import { useFlow } from 'stackflow';

interface MemoParams {
  id: string;
  dayIndex: number;
  timeIndex: number;
  planInfos: PlanResult | undefined;
  date: string;
}

interface Contents {
  time: string;
  activity: string;
  location: string;
}

const Memo: ActivityComponentType<MemoParams> = ({ params }) => {
  const { push } = useFlow();
  const { id, dayIndex, timeIndex, planInfos, date } = params;
  const [contents, setContents] = useState<Contents>({
    time: '',
    activity: '',
    location: ''
  });
  const [memo, setMemo] = useState<string>('');

  useEffect(() => {
    if (!planInfos) return;

    const dayKey = `day${dayIndex + 1}` as keyof typeof planInfos.data;
    const dayData = planInfos.data[dayKey];

    if (Array.isArray(dayData)) {
      const sortedData = [...dayData].sort((a, b) => {
        const [hourA, minuteA] = a.time.split(':').map(Number);
        const [hourB, minuteB] = b.time.split(':').map(Number);
        return hourA === hourB ? minuteA - minuteB : hourA - hourB;
      });

      const data = sortedData[timeIndex];

      if (data) {
        setMemo(data.memo || '');
        setContents({
          time: data.time || '',
          activity: data.activity || '',
          location: data.location || ''
        });
      }
    }
  }, [planInfos, dayIndex, timeIndex]);

  const updateMemoContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const selectedPlan = React.useMemo(() => {
    if (!planInfos) return [];

    const dayKey = `day${dayIndex + 1}` as keyof PlanData;
    const dayData = planInfos.data[dayKey];

    if (!Array.isArray(dayData)) return [];

    return dayData.map((plan, index) =>
      index === timeIndex ? { ...plan, memo } : plan
    );
  }, [planInfos, dayIndex, timeIndex, memo]);

  const { mutate: updateMemoMutation } = useMutation(
    () => {
      if (!planInfos || !id) throw new Error('Required data missing');

      return Plan_Update({
        id,
        data: {
          ...planInfos,
          data: {
            ...planInfos.data,
            [`day${dayIndex + 1}`]: selectedPlan
          }
        }
      });
    },
    {
      onError: (error) => {
        console.error('메모 수정 실패', error);
      }
    }
  );

  const directUpdatePage = () => {
    push('Update', {
      id: id,
      dayIndex: String(dayIndex),
      timeIndex: String(timeIndex),
      planInfos: planInfos
    });
  };

  return (
    <AppScreen>
      <_.Memo_Layout>
        <Header
          buttonState="수정"
          buttonColor="purple"
          onTapBackIcon={updateMemoMutation}
          onClickMethod={directUpdatePage}
        />
        <_.Memo_Container>
          <_.Memo_TitleBar>
            <_.Memo_DateAndTime>
              {date} {contents.time}
            </_.Memo_DateAndTime>
            <_.Memo_PlanTitle>{contents.activity}</_.Memo_PlanTitle>
            <_.Memo_Location>
              <Location />
              <_.Memo_Address>{contents.location}</_.Memo_Address>
            </_.Memo_Location>
          </_.Memo_TitleBar>
          <_.Memo_Content>
            <MiniMap keyword={contents.location} />
            <_.Memo_Memo
              onChange={updateMemoContent}
              value={memo}
              placeholder="메모를 입력하세요..."
            />
          </_.Memo_Content>
        </_.Memo_Container>
      </_.Memo_Layout>
    </AppScreen>
  );
};

export default Memo;
