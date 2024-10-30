import React from 'react';

// 파일
import { PreviewData } from 'data/PreviewData';
import * as _ from './style';
import KebabMenu from 'assets/Icon/KebabMenu';
import Comment from 'assets/image/Comment';
import { useParams } from 'react-router-dom';
import ReplyComment from '../ReplyComent';

const Comments = () => {
  const { id } = useParams<{ id: string }>();
  const post = PreviewData.find((item) => item.communityId === parseInt(id!));
  return (
    <_.Comment_Layout>
      <_.Comment_Profile />
      <_.Comment_ColContainer>
        <_.Conmment_Nickname>산타는 할아버지</_.Conmment_Nickname>
        <_.Conmment_Time>5분 전</_.Conmment_Time>
        <_.Conmment_Description>
          와 진짜 감자 많이도 드셨네요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 그렇게
          먹으니까 살이 찌죠
          안그래요????ㄹㄴㅇ럴ㅇ런울어뤄물ㄴㅇㄹㄴㅇㄹㄴ유루러ㅜㅜ러운런울미ㅝㅜㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹㄹ머뤙루러ㅏㅜㄹ마ㅓㅝ
        </_.Conmment_Description>
        <_.Conmment_Reply>
          <Comment width="14" height="14" /> 답글 {post?.commentCount}
        </_.Conmment_Reply>
        <ReplyComment/>
        <ReplyComment/>
      </_.Comment_ColContainer>
      <KebabMenu onClick={() => {}} />
    </_.Comment_Layout>
  );
};

export default Comments;
