// 라이브러리
import React from 'react';
import { useMutation } from 'react-query';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import { Auth_DeleteUser, Auth_Logout } from 'lib/apis/Auth';
import { useFlow } from 'stackflow';

const Setting: ActivityComponentType = () => {
  const { replace, pop } = useFlow();
  const { mutate: LogoutMutate } = useMutation(Auth_Logout, {
    onSuccess: (response) => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      pop();
      replace('Auth', {}, { animate: false });
      alert(response.message);
    }
  });

  const { mutate: DeleteMutate } = useMutation(Auth_DeleteUser, {
    onSuccess: (response) => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      pop();
      replace('Auth', {}, { animate: false });
      alert(response.message);
    }
  });

  return (
    <AppScreen>
      <Header title="설정" />
      <_.Setting_Layout>
        <_.Setting_Version>
          <_.Setting_Version_Info>버전 정보</_.Setting_Version_Info>
          <_.Setting_Version_Current>
            <_.Setting_Version_Title>현재 버전</_.Setting_Version_Title>
            <_.Setting_Version_Value>
              v2.1.0(2024.11.27)
            </_.Setting_Version_Value>
          </_.Setting_Version_Current>
          <_.Setting_Version_Latest>최신버전: v2.1.0</_.Setting_Version_Latest>
        </_.Setting_Version>
        <_.Setting_Withdrawal onClick={() => DeleteMutate()}>
          서비스 탈퇴
        </_.Setting_Withdrawal>
        <_.Setting_Logout onClick={() => LogoutMutate()}>
          로그아웃
        </_.Setting_Logout>
      </_.Setting_Layout>
    </AppScreen>
  );
};

export default Setting;
