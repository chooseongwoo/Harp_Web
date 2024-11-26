import React, { useEffect } from 'react';
import { ActivityComponentType } from '@stackflow/react';
import * as _ from './style';
import { Harp_Logo } from 'assets/image/HARP_LOGO.tsx';
import { useFlow } from 'stackflow';
import { Auth_AllInfo } from 'lib/apis/Auth';

const Splash: ActivityComponentType = () => {
  const { replace } = useFlow();

  useEffect(() => {
    let isMounted = true;

    const timer = setTimeout(() => {
      const fetchAuthInfo = async () => {
        try {
          await Auth_AllInfo();
          if (isMounted) replace('Home', {}, { animate: false });
        } catch (error) {
          console.error('로그인 검증 실패:', error);
          if (isMounted) replace('Auth', {}, { animate: false });
        }
      };

      fetchAuthInfo();
    }, 1500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [replace]);

  return (
    <_.Splash_Container>
      <Harp_Logo />
    </_.Splash_Container>
  );
};

export default Splash;
