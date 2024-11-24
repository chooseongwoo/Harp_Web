// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Share from 'assets/Icon/Share';
import { theme } from 'lib/utils/style/theme';
import { formatSelectedDate } from 'lib/utils/formatSelectedDate';
import { useFlow } from 'stackflow';
import { handleShare } from 'lib/utils/handleShare';

interface OwnProps {
  id: string | undefined;
  img: string;
  title: string;
  startDate: string;
  member: string;
}

const PlanResult = ({ id, img, title, startDate, member }: OwnProps) => {
  const { push } = useFlow();

  return (
    <_.PlanResult_Layout>
      <_.PlanResult_Container
        onClick={() => {
          push('Info', { id: id ?? '' });
        }}
        imgUrl={img}
      >
        <_.PlanResult_Title>{title}</_.PlanResult_Title>
        <_.PlanResult_Info>
          <_.PlanResult_DateAndMember>
            {formatSelectedDate(startDate, '.')} · {member}명
          </_.PlanResult_DateAndMember>
        </_.PlanResult_Info>
      </_.PlanResult_Container>
      <_.PlanResult_ShareButton
        onClick={() => {
          handleShare(title, id ?? '');
        }}
      >
        <Share color={theme.gray['2.5']} />
      </_.PlanResult_ShareButton>
    </_.PlanResult_Layout>
  );
};

export default PlanResult;
