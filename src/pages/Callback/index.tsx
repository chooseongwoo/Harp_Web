import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as _ from './style';
import { Auth_KakaoLogin } from 'lib/apis/Auth';

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');

    if (code) {
      handleLoginWithKakao(code);
    }
  }, [location]);

  const handleLoginWithKakao = async (code: string) => {
    try {
      const response = await Auth_KakaoLogin(code);

      if (response.accessToken && response.refreshToken) {
        const accessToken = response.accessToken;
        const refreshToken = response.refreshToken;
        const isFirst = response.isFirst;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        if (isFirst) navigate(`/register/terms`);
        else navigate(`/`);
      } else {
        console.error('로그인 실패');
        navigate(`/auth`);
      }
    } catch (error) {
      console.error('에러 발생:', error);
      alert('로그인 실패');
      navigate(`/auth`);
    }
  };

  return <_.Callback_Layout>Loading...</_.Callback_Layout>;
};

export default Callback;
