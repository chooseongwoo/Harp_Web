// 라이브러리
import React from 'react';

//파일
import CategoryModal from 'components/community/CategoryModal';
import * as _ from './style'
import Header from 'components/Header';
import DownArrow from 'assets/Icon/DownArrow';

const Write = () => {
  return (
    <_.Write_Layout>
        <Header title='글 쓰기' buttonState='게시'/>
      <_.Write_Container>
      <CategoryModal onClose={()=>{}} isOpen={false} onSelectCategory={()=>{}} />
        <_.Write_ModalButton>게시글 카테고리 선택하기 <DownArrow/></_.Write_ModalButton>
      </_.Write_Container>
    </_.Write_Layout>
  );
};

export default Write;