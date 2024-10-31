import React from 'react';
import * as _ from './style';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
}

const CategoryModal = ({ isOpen, onClose, onSelectCategory }:CategoryModalProps) => {
  if (!isOpen) return null;

  return (
    <_.CategoryModal_Overlay>
      <_.CategoryModal_Layout>
        <_.CategoryModal_Title>카테고리를 선택해주세요</_.CategoryModal_Title>
        <_.CategoryModal_List>
          <_.CategoryModal_Item onClick={() => onSelectCategory("일상/수다")}>일상/수다</_.CategoryModal_Item>
          <_.CategoryModal_Item onClick={() => onSelectCategory("여행후기")}>여행후기</_.CategoryModal_Item>
          <_.CategoryModal_Item onClick={() => onSelectCategory("맛집공유")}>맛집공유</_.CategoryModal_Item>
        </_.CategoryModal_List>
      </_.CategoryModal_Layout>
    </_.CategoryModal_Overlay>
  );
};

export default CategoryModal;
