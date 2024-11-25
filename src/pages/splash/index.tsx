//라이브러리
import React, { useEffect, useState } from 'react';
import { ActivityComponentType } from '@stackflow/react';

//파일
import * as _ from './style';
import { Harp_Logo } from 'assets/image/HARP_LOGO.tsx';
import { useFlow } from 'stackflow';

const Splash: ActivityComponentType = () => {
  const { replace } = useFlow();

  useEffect(() => {
    const timer = setTimeout(() => {
      replace('Auth', {}, { animate: false });
    }, 1500);

    return () => clearTimeout(timer);
  }, [replace]);

  return (
    <_.Splash_Container>
      <Harp_Logo />
    </_.Splash_Container>
  );
};

export default Splash;
