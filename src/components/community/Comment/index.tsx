import React, { useState } from 'react';

// 파일
import * as _ from './style';
import KebabMenu from 'assets/Icon/KebabMenu';
import Comment from 'assets/image/Comment';
import ReplyComment from '../ReplyComent';
import { comment } from 'types/community';
import { getDayMinuteCounter } from 'lib/utils/getDayMinuteCounter';

interface OwnProps {
  comment: comment;
  onReplyClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Comments = ({ comment, onReplyClick }: OwnProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleReplyVisibility = () => {
    if (comment.replies.length > 0) {
      setIsOpened(!isOpened);
    }
  };

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
          <_.Comment_Upload
            onClick={() => {
              onReplyClick(true);
            }}
          >
            답글 달기
          </_.Comment_Upload>
          <_.Comment_Length
            onClick={(e) => {
              e.preventDefault();
              toggleReplyVisibility();
            }}
          >
            <Comment width="14" height="14" /> {comment.replies.length}
          </_.Comment_Length>
        </_.Comment_Reply>
        {isOpened ? (
          <_.Comment_ReplyComments>
            {comment.replies.map((reply) => (
              <ReplyComment key={reply.commnetsId} replyComment={reply} />
            ))}
          </_.Comment_ReplyComments>
        ) : null}
      </_.Comment_ColContainer>
      <KebabMenu onClick={() => {}} />
    </_.Comment_Layout>
  );
};

export default Comments;
