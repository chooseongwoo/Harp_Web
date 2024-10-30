// 라이브러리
import React from 'react';

// 파일
import * as _ from './style'
import KebabMenu from 'assets/Icon/KebabMenu';

const ReplyComment = () => {
  return (
    <_.ReplyComment_Layout>
      <_.ReplyComment_Profile />
      <_.ReplyComment_ColContainer>
        <_.ReplyComment_Nickname>산타는 할아버지</_.ReplyComment_Nickname>
        <_.ReplyComment_Time>5분 전</_.ReplyComment_Time>
        <_.ReplyComment_Description>
          와 진짜 감자 많이도 드셨네요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 그렇게
          먹으니까 살이 찌죠
          안그래요????ㄹㄴㅇ럴ㅇ런울어뤄물ㄴㅇㄹㄴㅇㄹㄴ유루러ㅜㅜ러운런울미ㅝㅜㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹㄹ머뤙루러ㅏㅜㄹ마ㅓㅝ
        </_.ReplyComment_Description>
      </_.ReplyComment_ColContainer>
      <KebabMenu onClick={() => {}} />
    </_.ReplyComment_Layout>
  );
};

export default ReplyComment;