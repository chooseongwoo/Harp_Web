import React, { useEffect, useRef, useState } from 'react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import CategoryModal from 'components/community/CategoryModal';
import * as _ from './style';
import Header from 'components/Header';
import DownArrow from 'assets/Icon/DownArrow';
import { theme } from 'lib/utils/style/theme';
import Image from 'assets/image/Image';
import Location_g from 'assets/image/Location-g';
import { handleImageEdit } from 'lib/utils/handleImageEdit';
import Delete from 'assets/Icon/Delete';
import { useMutation } from 'react-query';
import { Community_CreatePost } from 'lib/apis/Community';
import { Upload_Image } from 'lib/apis/Upload';
import { useFlow } from 'stackflow';

const Write = () => {
  const { pop } = useFlow();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] =
    useState<string>('게시글 카테고리 선택하기');
  const [inputs, setInputs] = useState({
    title: '',
    des: ''
  });

  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const { mutate: createPostMutation } = useMutation(
    () =>
      Community_CreatePost({
        ...inputs,
        tag: selectedCategory,
        images: selectedImages
      }),
    {
      onSuccess: (response) => {
        alert(response.message);
        pop();
      },
      onError: (error) => {
        console.error('글 작성 실패', error);
      }
    }
  );

  const handleCreatePost = () => {
    const validationErrors = [];

    if (selectedCategory === '게시글 카테고리 선택하기') {
      validationErrors.push('카테고리를 선택해주세요');
    }
    if (inputs.title.length < 2) {
      validationErrors.push('제목은 2자 이상 입력해주세요');
    }
    if (inputs.des.length < 10) {
      validationErrors.push('내용은 10자 이상 입력해주세요');
    }

    if (validationErrors.length > 0) {
      alert(validationErrors.join('\n'));
      return;
    }

    createPostMutation();
  };

  const { mutate: uploadImageMutation } = useMutation(
    (formData: FormData) => Upload_Image(formData),
    {
      onSuccess: (response) => {
        setSelectedImages((prevImages) => [
          ...prevImages,
          response.data.url || ''
        ]);
      },
      onError: (error) => {
        console.error('이미지 업로드 실패:', error);
        alert('이미지 업로드 중 오류가 발생했습니다.');
      }
    }
  );

  const handlePhotoButtonClick = () => {
    handleImageEdit(async (image) => {
      if (selectedImages.length < 20) {
        const formData = new FormData();
        formData.append('img', image);
        uploadImageMutation(formData);
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

  const handleInputChange = (field: keyof typeof inputs, value: string) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [field]: value
    }));
  };

  useEffect(() => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedImages]);

  return (
    <AppScreen>
      <_.Write_Layout>
        <Header
          title="글 쓰기"
          buttonState="게시"
          onClickMethod={handleCreatePost}
        />
        <_.Write_Container>
          <CategoryModal
            onClose={() => setCategoryModalOpen(false)}
            isOpen={isCategoryModalOpen}
            onSelectCategory={handleSelectCategory}
          />
          <_.Write_ModalButton onClick={handleOpenCategoryModal}>
            {selectedCategory} <DownArrow color={theme.gray['3.5']} />
          </_.Write_ModalButton>
          <_.Write_TitleInput
            placeholder="제목을 입력하세요..."
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
          <_.Write_Line />
          <_.Write_DesInput
            placeholder="- 커뮤니티 가이드라인을 준수하며, 서로를 배려하고 존중하는 글을 작성해주세요.
- 불필요한 비방이나 공격적인 표현은 자제하고, 모두가 즐겁게 소통할 수 있는 환경을 만들어주세요."
            onChange={(e) => handleInputChange('des', e.target.value)}
          />
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
                <Delete />
              </_.Write_DeleteIcon>
            </_.Write_ImageContainer>
          ))}
          <div ref={imageContainerRef} />
        </_.Write_Container>
      </_.Write_Layout>
    </AppScreen>
  );
};

export default Write;
