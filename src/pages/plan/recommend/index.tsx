// 라이브러리
import React from 'react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import { RecommendedPlanResult } from 'types/plan';

interface RecommendParams {
  plan: RecommendedPlanResult;
}

const Recommend: ActivityComponentType<RecommendParams> = ({ params }) => {
  const plan = params.plan;

  return (
    <AppScreen>
      <Header />
      <_.Recommend_Layout>
        <_.Recommend_Image imgUrl={plan.mainImg} />
        <_.Recommend_Title>{plan.title}</_.Recommend_Title>
        <_.Recommend_Description>{plan.data.tips}</_.Recommend_Description>
      </_.Recommend_Layout>
    </AppScreen>
  );
};

export default Recommend;
