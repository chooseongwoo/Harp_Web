import React, { useEffect, useRef } from 'react';
import Delete from 'assets/Icon/Delete';
import * as _ from './style';

interface ImageDetailProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedImage: string | null;
}

const ImageDetail = ({ isOpen, onRequestClose, selectedImage }: ImageDetailProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
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
    <_.ImageDetail_Overlay ref={overlayRef} onClick={onRequestClose}>
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