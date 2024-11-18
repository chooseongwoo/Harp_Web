// 라이브러리
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import { Auth_Logout } from 'lib/apis/Auth';

const Setting = () => {
  const navigate = useNavigate();
  const { mutate: LogoutMutate } = useMutation(Auth_Logout, {
    onSuccess: (response) => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      alert(response.message);
      navigate(`/auth`);
    }
  });

  return (
    <>
      <Header title="설정" />
      <_.Setting_Layout>
        <_.Setting_Version>
          <_.Setting_Version_Info>버전 정보</_.Setting_Version_Info>
          <_.Setting_Version_Current>
            <_.Setting_Version_Title>현재 버전</_.Setting_Version_Title>
            <_.Setting_Version_Value>24.29.0(242900)</_.Setting_Version_Value>
          </_.Setting_Version_Current>
          <_.Setting_Version_Latest>최신버전: 24.31.0</_.Setting_Version_Latest>
        </_.Setting_Version>
        <_.Setting_Withdrawal>서비스 탈퇴</_.Setting_Withdrawal>
        <_.Setting_Logout onClick={() => LogoutMutate()}>
          로그아웃
        </_.Setting_Logout>
      </_.Setting_Layout>
    </>
  );
};

export default Setting;
