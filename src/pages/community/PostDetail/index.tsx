import React from 'react';
import { useParams } from 'react-router-dom';
import { PreviewData } from 'data/PreviewData'; // 데이터 임포트

// 파일
import * as _ from './style';
import Header from 'components/Header';
import KebabMenu from 'assets/Icon/KebabMenu';
import Heart from 'assets/image/Heart';

const Detail = () => {
  const { id } = useParams<{ id: string }>();

  const post = PreviewData.find((item) => item.communityId === parseInt(id!));

  if (!post || !id) {
    return <div>글이 삭제됐거나 이전되었습니다.</div>;
  }

  return (
    <_.PostDetail_Layout>
      <Header title='글 상세' />
      <_.PostDetail_Container>
        <_.PostDetail_SapceBetween>
          <_.PostDetail_TagBox>{post.tag.join(', ')}</_.PostDetail_TagBox> {/* 태그 표시 */}
          <KebabMenu onClick={() => {}} />
        </_.PostDetail_SapceBetween>
        <_.PostDetial_Title>
          {post.title}
        </_.PostDetial_Title>
        <_.PostDetail_Info>
          {`${post.author} · ${post.createdAt}`}
        </_.PostDetail_Info>
        <_.PostDetail_Description>
          {post.des}
        </_.PostDetail_Description>
        <Heart width='18' height='18' disabled={true} />
      </_.PostDetail_Container>
    </_.PostDetail_Layout>
  );
};

export default Detail;