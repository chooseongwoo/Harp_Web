// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import KebabMenu from 'assets/Icon/KebabMenu';
import { replyComment } from 'types/community';
import { getDayMinuteCounter } from 'lib/utils/getDayMinuteCounter';

const ReplyComment = ({ replyComment }: { replyComment: replyComment }) => {
  return (
    <_.ReplyComment_Layout>
      <_.ReplyComment_Profile src={replyComment.author.profileImg} />
      <_.ReplyComment_ColContainer>
        <_.ReplyComment_Nickname>
          {replyComment.author.nickname}
        </_.ReplyComment_Nickname>
        <_.ReplyComment_Time>
          {getDayMinuteCounter(replyComment.updatedAt)}
        </_.ReplyComment_Time>
        <_.ReplyComment_Description>
          {replyComment.des}
        </_.ReplyComment_Description>
      </_.ReplyComment_ColContainer>
      <KebabMenu onClick={() => {}} />
    </_.ReplyComment_Layout>
  );
};

export default ReplyComment;
