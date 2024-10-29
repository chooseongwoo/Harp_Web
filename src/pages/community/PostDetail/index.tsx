import React from 'react';
import { useParams } from 'react-router-dom';
import { previewData } from 'types/community';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import KebabMenu from 'assets/Icon/KebabMenu';

const Detail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <_.PostDetail_Layout>
      <Header title='글 상세' />
      <_.PostDetail_Container>
        <_.PostDetail_TagBox>sdasd</_.PostDetail_TagBox>
        <KebabMenu onClick={()=>{}}/>
      </_.PostDetail_Container>
    </_.PostDetail_Layout>

  );
};

export default Detail;