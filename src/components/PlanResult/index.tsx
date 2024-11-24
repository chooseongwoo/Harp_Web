// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Share from 'assets/Icon/Share';
import { theme } from 'lib/utils/style/theme';
import { formatSelectedDate } from 'lib/utils/formatSelectedDate';
import { useFlow } from 'stackflow';

interface OwnProps {
  id: string | undefined;
  img: string;
  title: string;
  startDate: string;
  member: string;
}

const PlanResult = ({ id, img, title, startDate, member }: OwnProps) => {
  const { push } = useFlow();
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} 일정`,
          text: '이 링크를 공유하세요!',
          url: `/plan/info/${id}`
        });
        console.log('공유 성공!');
      } catch (error) {
        console.error('공유 중 에러 발생:', error);
      }
    } else {
      console.log('Web Share API가 지원되지 않습니다.');
    }
  };

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
      <_.PlanResult_ShareButton onClick={handleShare}>
        <Share color={theme.gray['2.5']} />
      </_.PlanResult_ShareButton>
    </_.PlanResult_Layout>
  );
};

export default PlanResult;
