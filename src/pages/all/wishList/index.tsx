import React from 'react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useQuery } from 'react-query';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import { Community_AllPost, Community_GetWish } from 'lib/apis/Community';
import { community } from 'types/community';
import PreviewCard from 'components/community/PreviewCard';

const WishList = () => {
  const { data: likedPosts, isLoading: isLikeLoading } = useQuery(
    ['getLikedPosts'],
    async () => {
      const response = await Community_GetWish();
      return response.data;
    }
  );

  const { data: allPosts, isLoading: allPostsLoading } = useQuery(
    ['getAllPosts'],
    async () => {
      const response = await Community_AllPost();
      return response.data.Formatting;
    }
  );

  const filteredPosts = React.useMemo(() => {
    if (!likedPosts || !allPosts) return [];
    const likedCommunityIds = likedPosts.map(
      (like: { communityId: number }) => like.communityId
    );
    return allPosts.filter((post: community) =>
      likedCommunityIds.includes(post.communityId)
    );
  }, [likedPosts, allPosts]);

  return (
    <AppScreen>
      <Header title="관심 목록" />
      {isLikeLoading || allPostsLoading ? (
        <_.WishList_Not>글 불러오는 중...</_.WishList_Not>
      ) : filteredPosts.length > 0 ? (
        <_.WishList_Layout>
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
        </_.WishList_Layout>
      ) : (
        <_.WishList_Not>등록된 관심 글이 없습니다.</_.WishList_Not>
      )}
    </AppScreen>
  );
};

export default WishList;
