import React from 'react';

// 파일
import * as _ from './style';
import KebabMenu from 'assets/Icon/KebabMenu';
import Comment from 'assets/image/Comment';
import ReplyComment from '../ReplyComent';
import { comment } from 'types/community';
import { getDayMinuteCounter } from 'lib/utils/getDayMinuteCounter';

const Comments = ({ comment }: { comment: comment }) => {
  return (
    <_.Comment_Layout>
      <_.Comment_Profile src={comment.author.profileImg} />
      <_.Comment_ColContainer>
        <_.Comment_Nickname>{comment.author.nickname}</_.Comment_Nickname>
        <_.Comment_Time>
          {getDayMinuteCounter(comment.updatedAt)}
        </_.Comment_Time>
        <_.Comment_Description>{comment.des}</_.Comment_Description>
        <_.Comment_Reply>
          <Comment width="14" height="14" /> 답글 {comment.replies.length}
        </_.Comment_Reply>
        <_.Comment_ReplyComments>
          {comment.replies.map((reply) => (
            <ReplyComment key={reply.commnetsId} replyComment={reply} />
          ))}
        </_.Comment_ReplyComments>
      </_.Comment_ColContainer>
      <KebabMenu onClick={() => {}} />
    </_.Comment_Layout>
  );
};

export default Comments;
