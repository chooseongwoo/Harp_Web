// 라이브러리
import React, { useEffect, useRef } from 'react';

// 파일
import * as _ from './style';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
}

const categories = ["💬 일상/수다", "✈️ 여행", "🥨 맛집", "🍯 꿀팁공유", "💡 고민상담"];

const CategoryModal = ({ isOpen, onClose, onSelectCategory }: CategoryModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <_.CategoryModal_Overlay>
      <_.CategoryModal_Layout ref={modalRef}>
        <_.CategoryModal_Title>카테고리를 선택해주세요</_.CategoryModal_Title>
        <_.CategoryModal_List>
          {categories.map((category) => (
            <_.CategoryModal_Item key={category} onClick={() => onSelectCategory(category)}>
              {category}
            </_.CategoryModal_Item>
          ))}
        </_.CategoryModal_List>
      </_.CategoryModal_Layout>
    </_.CategoryModal_Overlay>
  );
};

export default CategoryModal;
