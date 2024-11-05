import React, { useState } from 'react';
import CategoryModal from 'components/community/CategoryModal';
import * as _ from './style';
import Header from 'components/Header';
import DownArrow from 'assets/Icon/DownArrow';
import { theme } from 'lib/utils/style/theme';
import Image from 'assets/image/Image';
import Location_g from 'assets/image/Location-g';
import { handleImageEdit } from 'lib/utils/handleImageEdit';
import Delete from 'assets/Icon/Delete';

const Write = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('게시글 카테고리 선택하기');

  const handlePhotoButtonClick = () => {
    handleImageEdit((image) => {
      if (selectedImages.length < 20) {
        setSelectedImages((prevImages) => [...prevImages, image]);
      } else {
        alert('최대 20장까지 이미지를 업로드할 수 있습니다.');
      }
    });
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleOpenCategoryModal = () => {
    setCategoryModalOpen(true);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCategoryModalOpen(false);
  };

  return (
    <_.Write_Layout>
      <Header title="글 쓰기" buttonState="게시" />
      <_.Write_Container>
        <CategoryModal
          onClose={() => setCategoryModalOpen(false)}
          isOpen={isCategoryModalOpen}
          onSelectCategory={handleSelectCategory}
        />
        <_.Write_ModalButton onClick={handleOpenCategoryModal}>
          {selectedCategory} <DownArrow color={theme.gray['3.5']} />
        </_.Write_ModalButton>
        <_.Write_TitleInput placeholder="제목을 입력하세요..." />
        <_.Write_Line />
        <_.Write_DesInput
          placeholder="- 커뮤니티 가이드라인을 준수하며, 서로를 배려하고 존중하는 글을 작성해주세요.
- 불필요한 비방이나 공격적인 표현은 자제하고, 모두가 즐겁게 소통할 수 있는 환경을 만들어주세요."
        ></_.Write_DesInput>
        {!isCategoryModalOpen && (
          <_.Write_BottomContainer>
            <_.Write_PhotoButton onClick={handlePhotoButtonClick}>
              <Image /> 사진
            </_.Write_PhotoButton>
            <_.Write_LocationButton>
              <Location_g /> 장소
            </_.Write_LocationButton>
          </_.Write_BottomContainer>
        )}
        {selectedImages.map((image, index) => (
          <_.Write_ImageContainer key={index} backgroundImage={image}>
            <_.Write_DeleteIcon onClick={() => handleRemoveImage(index)}>
              <Delete/>
            </_.Write_DeleteIcon>
          </_.Write_ImageContainer>
        ))}
      </_.Write_Container>
    </_.Write_Layout>
  );
};

export default Write;