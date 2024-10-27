// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Search from 'assets/image/Search';
import { theme } from 'lib/utils/style/theme';

const Community = () => {
  return (
    <_.Community_Layout>
      <_.Community_Header>
        <_.Community_Header_Title>커뮤니티</_.Community_Header_Title>
        <Search stroke={theme.gray.black} />
      </_.Community_Header>
    </_.Community_Layout>
  );
};

export default Community;
