// 라이브러리
import React, { useEffect, useRef } from 'react';

// 파일
import Delete from 'assets/Icon/Delete';
import * as _ from './style';

interface ImageDetailProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedImage: string | null;
}

const ImageDetail = ({ isOpen, onRequestClose, selectedImage }: ImageDetailProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onRequestClose();
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
  }, [isOpen, onRequestClose]);

  if (!isOpen) return null;

  return (
    <_.ImageDetail_Overlay>
        <_.ImageDetail_DeleteIcon onClick={onRequestClose}>
          <Delete color='white' />
        </_.ImageDetail_DeleteIcon>
        {selectedImage && (
          <_.ImageDetail_Image src={selectedImage} />
        )}
    </_.ImageDetail_Overlay>
  );
};

export default ImageDetail;