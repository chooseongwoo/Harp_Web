import React, { useEffect } from 'react';
import * as _ from './style';
import { Auth_KakaoLogin } from 'lib/apis/Auth';
import { ActivityComponentType } from '@stackflow/react';
import { useFlow } from 'stackflow';

const Callback: ActivityComponentType = () => {
  const { pop, push, replace } = useFlow();

  useEffect(() => {
    const fetchData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('accessToken');
      const refreshToken = urlParams.get('refreshToken');

      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        try {
          const response = await Auth_KakaoLogin();
          if (response.data.newAccount === '1') {
            replace('Terms', {}, { animate: false });
          } else replace('Home', {}, { animate: false });
        } catch (error) {
          alert('토큰 발급에 실패했습니다.');
          console.error('데이터 페칭 중 에러', error);
        }
      } else {
        replace('Auth', {});
        alert('로그인에 실패했습니다.');
      }
    };

    fetchData();
  }, [push, replace]);

  return <></>;
};

export default Callback;
