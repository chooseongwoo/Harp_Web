// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Heart from 'assets/image/Heart';
import Comment from 'assets/image/Comment';

const PreviewCard = () => {
  return (
    <_.PreviewCard_Layout>
      <_.PreviewCard_Left>
        <_.PreviewCard_Gray>여행후기🌱</_.PreviewCard_Gray>
        <_.PreviewCard_Title>
          오랜만에 다녀온 강원도 여행 후기ㅇ매냐ㅓ임너이먼이
        </_.PreviewCard_Title>
        <_.PreviewCard_ReactionList>
          <_.PreviewCard_Reaction>
            <Heart width="16" height="16" />
            <_.PreviewCard_Gray>32</_.PreviewCard_Gray>
          </_.PreviewCard_Reaction>
          <_.PreviewCard_Reaction>
            <Comment />
            <_.PreviewCard_Gray>32</_.PreviewCard_Gray>
          </_.PreviewCard_Reaction>
        </_.PreviewCard_ReactionList>
      </_.PreviewCard_Left>
      <_.PreviewCard_Right>
        <_.PreviewCard_Gray>20분 전</_.PreviewCard_Gray>
        <_.PreviewCard_Image />
      </_.PreviewCard_Right>
    </_.PreviewCard_Layout>
  );
};

export default PreviewCard;
