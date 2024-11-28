import React, { useState } from 'react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useQuery } from 'react-query';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import { PlanResult } from 'types/plan';
import { Plan_UserPlanList } from 'lib/apis/Plan';
import { formatSelectedDate } from 'lib/utils/formatSelectedDate';
import { formatTravelPeriod } from 'lib/utils/formatTravelPeriod';
import { useFlow } from 'stackflow';

const PastSchedule = () => {
  const { push } = useFlow();
  const [userPlans, setUserPlans] = useState<PlanResult[] | null>(null);

  const { isLoading: UserPlansLoading } = useQuery(
    ['userPlans'],
    Plan_UserPlanList,
    {
      onSuccess: (response: { data: { PlanData: PlanResult[] } }) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const pastPlans = response.data.PlanData?.filter(
          (plan: { endDate: string }) => {
            return new Date(plan.endDate).getTime() < today.getTime();
          }
        ).sort((a: { endDate: string }, b: { endDate: string }) => {
          return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
        });
        setUserPlans(pastPlans);
      }
    }
  );

  return (
    <AppScreen>
      <Header title="지난 일정" />
      <_.PastSchedule_Layout>
        {UserPlansLoading ? (
          <_.PastSchedule_ErrorOrNothing>
            불러오는 중...
          </_.PastSchedule_ErrorOrNothing>
        ) : userPlans && userPlans.length > 0 ? (
          userPlans.map((plan) => {
            const formattedStartDate = formatSelectedDate(plan.startDate, '.');
            const formattedEndDate = formatSelectedDate(plan.endDate, '.');
            const travelPeriod = formatTravelPeriod(
              plan.startDate,
              plan.endDate
            );

            const duration =
              formattedStartDate === formattedEndDate
                ? `${formattedStartDate} (${travelPeriod})`
                : `${formattedStartDate}~${formattedEndDate} (${travelPeriod})`;

            return (
              <_.PastSchedule_Plan
                key={plan.planId}
                onClick={() => {
                  push('Info', { id: plan.planId });
                }}
              >
                <_.PastSchedule_Image src={plan.mainImg} />
                <_.PastSchedule_Texts>
                  <_.PastSchedule_Title>{plan.planName}</_.PastSchedule_Title>
                  <_.PastSchedule_Date>{duration}</_.PastSchedule_Date>
                </_.PastSchedule_Texts>
              </_.PastSchedule_Plan>
            );
          })
        ) : (
          <_.PastSchedule_ErrorOrNothing>
            지난 일정이 없습니다.
          </_.PastSchedule_ErrorOrNothing>
        )}
      </_.PastSchedule_Layout>
    </AppScreen>
  );
};

export default PastSchedule;
