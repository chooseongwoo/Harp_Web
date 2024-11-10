// 라이브러리
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 파일
import * as _ from './style';
import Search from 'assets/image/Search';
import { theme } from 'lib/utils/style/theme';
import MenuBar from 'components/MenuBar';
import PreviewCard from 'components/community/PreviewCard';
import Edit from 'assets/Icon/Edit';
import { community } from 'types/community';
import { useQuery } from 'react-query';
import { Community_AllPost } from 'lib/apis/Community';

const Community = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(['getAllPost'], Community_AllPost, {
    staleTime: 10000,
    cacheTime: 600000
  });

  const [selectedCategories, setSelectedCategories] = useState('전체');

  const handleCategoryClick = (category: string) => {
    setSelectedCategories(category);
  };

  const categories = [
    '전체',
    '💬 일상/수다',
    '✈️ 여행',
    '🥨 맛집',
    '🍯 꿀팁 공유',
    '💡 고민 상담'
  ];

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
      {!isLoading ? (
        data?.data?.Formatting && data.data.Formatting.length > 0 ? (
          <_.Community_PostList>
            {data.data.Formatting.map((post: community) => (
              <_.Community_Link
                to={`/community/detail/${post.communityId}`}
                key={post.communityId}
              >
                <PreviewCard
                  title={post.title}
                  tag={post.tag}
                  wishCount={post.wishCount}
                  commentCount={post.commentCount}
                  updatedAt={post.updatedAt}
                  images={post.images}
                />
              </_.Community_Link>
            ))}
          </_.Community_PostList>
        ) : (
          <_.Community_Not>등록된 글이 없습니다.</_.Community_Not>
        )
      ) : (
        <_.Community_Not>글 불러오는 중...</_.Community_Not>
      )}
      <_.Community_Writing onClick={() => navigate('/community/write')}>
        <Edit />
      </_.Community_Writing>
      <MenuBar selectState={3} />
    </_.Community_Layout>
  );
};

export default Community;
