// 라이브러리
import React, { useState } from 'react';

// 파일
import * as _ from './style';
import Search from 'assets/image/Search';
import { theme } from 'lib/utils/style/theme';

const Community = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    '전체'
  ]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((selectedCategory) => {
      if (category === '전체') {
        return ['전체'];
      }
      const newCategories = selectedCategory.includes(category)
        ? selectedCategory.filter((c) => c !== category)
        : [...selectedCategory.filter((c) => c !== '전체'), category];
      return newCategories.length === 0 ? ['전체'] : newCategories;
    });
  };

  const categories = ['전체', '여행후기🌱', '#맛집⭐️', '질문', '정보공유'];

  return (
    <_.Community_Layout>
      <_.Community_Header>
        <_.Community_Header_Title>커뮤니티</_.Community_Header_Title>
        <Search stroke={theme.gray.black} />
      </_.Community_Header>
      <_.Community_CategoryList>
        {categories.map((category) => (
          <_.Community_Category
            key={category}
            onClick={() => handleCategoryClick(category)}
            isSelected={selectedCategories.includes(category)}
          >
            {category}
          </_.Community_Category>
        ))}
      </_.Community_CategoryList>
      <_.Community_NoticeList>
        <_.Community_Notice>
          <_.Community_Notice_Title>공지사항</_.Community_Notice_Title>
          <_.Community_Notice_Content>
            하프 서비스 정식 출시 안내🎉
          </_.Community_Notice_Content>
          <_.Community_Notice_Date>2024.11.28</_.Community_Notice_Date>
        </_.Community_Notice>
      </_.Community_NoticeList>
    </_.Community_Layout>
  );
};

export default Community;
