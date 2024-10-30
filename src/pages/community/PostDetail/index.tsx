// 라이브러리
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// 파일
import { PreviewData } from 'data/PreviewData';
import * as _ from './style';
import Header from 'components/Header';
import KebabMenu from 'assets/Icon/KebabMenu';
import Heart from 'assets/image/Heart';
import Comment from 'components/community/Comment';

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const post = PreviewData.find((item) => item.communityId === parseInt(id!));

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => setIsLiked(!isLiked);

  if (!post || !id) {
    return <div>글이 삭제됐거나 이전되었습니다.</div>;
  }

  return (
    <_.PostDetail_Layout>
      <Header title='글 상세' />
      <_.PostDetail_Container>
          <Comment />
        <_.PostDetail_SapceBetween>
          <_.PostDetail_TagBox>{post.tag.join(', ')}</_.PostDetail_TagBox>
          <KebabMenu onClick={() => {}} />
        </_.PostDetail_SapceBetween>
        <_.PostDetial_Title>{post.title}</_.PostDetial_Title>
        <_.PostDetail_Info>{`${post.author} · ${post.createdAt}`}</_.PostDetail_Info>
        <_.PostDetail_Description>{post.des}</_.PostDetail_Description>
        <_.PostDetail_Image src={post.image} />
        <_.PostDetail_Reaction>
          <Heart
            width='20'
            height='20'
            isFilled={isLiked}
            onClick={handleLikeClick}
          />
          <_.PostDetail_LikeCount>
            좋아요 {post.wishCount + (isLiked ? 1 : 0)}
          </_.PostDetail_LikeCount>
        </_.PostDetail_Reaction>
        <_.PostDetail_Line />
      </_.PostDetail_Container>
    </_.PostDetail_Layout>
  );
};

export default Detail;