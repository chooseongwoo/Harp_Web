// 라이브러리
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

// 파일
import * as _ from './style';
import Search from 'assets/image/Search';
import { theme } from 'lib/utils/style/theme';
import MenuBar from 'components/MenuBar';
import PreviewCard from 'components/community/PreviewCard';
import Edit from 'assets/Icon/Edit';
import { community } from 'types/community';
import { Community_AllPost } from 'lib/apis/Community';
import { useFlow } from 'stackflow';

const Community: ActivityComponentType = () => {
  const { push } = useFlow();

  const { data, isLoading } = useQuery(['getAllPost'], Community_AllPost, {
    staleTime: 10000,
    cacheTime: 600000
  });

  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [filteredPosts, setFilteredPosts] = useState<community[]>([]);

  const handleCategoryClick = (category: string) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
    }
  };

  const categories = [
    '전체',
    '💬 일상/수다',
    '✈️ 여행',
    '🥨 맛집',
    '🍯 꿀팁 공유',
    '💡 고민 상담'
  ];

  useEffect(() => {
    const posts = data?.data?.Formatting || [];
    const filtered =
      selectedCategory !== '전체'
        ? posts.filter((post: community) => post.tag === selectedCategory)
        : posts;
    setFilteredPosts(filtered);
  }, [selectedCategory, data]);

  return (
    <AppScreen>
      <_.Community_Layout>
        <_.Community_Header>
          <_.Community_Header_Title>커뮤니티</_.Community_Header_Title>
          {/* <Search stroke={theme.gray.black} /> */}
        </_.Community_Header>
        <_.Community_CategoryList>
          {categories.map((category) => (
            <_.Community_Category
              key={category}
              onClick={() => handleCategoryClick(category)}
              isSelected={selectedCategory.includes(category)}
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
            <_.Community_Notice_Date>2024.11.28.</_.Community_Notice_Date>
          </_.Community_Notice>
        </_.Community_NoticeList>
        {!isLoading ? (
          filteredPosts.length > 0 ? (
            <_.Community_PostList>
              {filteredPosts.map((post: community) => (
                <PreviewCard
                  key={post.communityId}
                  communityId={post.communityId}
                  title={post.title}
                  tag={post.tag}
                  wishCount={post.wishCount}
                  commentCount={post.commentCount}
                  updatedAt={post.updatedAt}
                  images={post.images}
                />
              ))}
            </_.Community_PostList>
          ) : (
            <_.Community_Not>등록된 글이 없습니다.</_.Community_Not>
          )
        ) : (
          <_.Community_Not>글 불러오는 중...</_.Community_Not>
        )}
        <_.Community_Writing
          onClick={() => push('Write', {}, { animate: false })}
        >
          <Edit />
        </_.Community_Writing>
        <MenuBar selectState={3} />
      </_.Community_Layout>
    </AppScreen>
  );
};

export default Community;
