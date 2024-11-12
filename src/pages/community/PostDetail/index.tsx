// 라이브러리
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { useMutation, useQueries, useQueryClient } from 'react-query';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import KebabMenu from 'assets/Icon/KebabMenu';
import Heart from 'assets/image/Heart';
import Comment from 'components/community/Comment';
import Send from 'assets/image/Send';
import { theme } from 'lib/utils/style/theme';
import { getDayMinuteCounter } from 'lib/utils/getDayMinuteCounter';
import { slider } from 'config/slider';
import ImageDetail from 'components/community/ImageDetail';
import {
  Community_AddComment,
  Community_IsLike,
  Community_OnePost,
  Community_PostWish
} from 'lib/apis/Community';
import { detailPost } from 'types/community';
import X from 'assets/Icon/X';

const PostDetail = () => {
  const [message, setMessage] = useState<string>('');
  const [isRepliedComment, setIsRepliedComment] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [replyingTo, setReplyingTo] = useState<{
    nickname: string;
    commentsId: number;
  } | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const { id } = useParams<{ id: string }>();

  const queryClient = useQueryClient();

  const [{ isLoading, data: postData }] = useQueries([
    {
      queryKey: ['getOnePost', id],
      queryFn: () => Community_OnePost(id ?? ''),
      staleTime: 10000,
      cacheTime: 600000
    },
    {
      queryKey: ['getIsLiked', id],
      queryFn: () => Community_IsLike(id ?? ''),
      onSuccess: (response: any) => {
        setIsLiked(response?.data?.status);
      },
      staleTime: 10000,
      cacheTime: 600000
    }
  ]);

  const { mutate: postWishMutation } = useMutation(
    () => Community_PostWish(id!),
    {
      onError: (error) => {
        console.error('찜 실패', error);
      }
    }
  );

  const { mutate: addCommentMutation } = useMutation(
    () =>
      Community_AddComment({
        des: message,
        isCommentForComment: isRepliedComment,
        parentComment: replyingTo?.commentsId,
        communityId: parseInt(id || '', 10)
      }),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['getOnePost', id]);
        setMessage('');
        if (isRepliedComment) {
          setIsRepliedComment(false);
        }
      },
      onError: (error) => {
        alert(`댓글 작성 실패: ${error}`);
      }
    }
  );

  const resizeHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    setMessage(e.target.value);
  };

  const submitComment = () => {
    if (message !== '') {
      addCommentMutation();
    }
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    postWishMutation();
    isLiked ? (post.wishCount -= 1) : (post.wishCount += 1);
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleReplyClick = (nickname: string, commentsId: number) => {
    setIsRepliedComment(true);
    setReplyingTo({ nickname, commentsId });
    textareaRef.current?.focus();
  };

  const closeReply = () => {
    setIsRepliedComment(false);
    setReplyingTo(null);
  };

  if (isLoading) {
    return <_.PostDetail_Message>불러오는 중...</_.PostDetail_Message>;
  }

  const post: detailPost = postData?.data?.post;

  if (!post || !id) {
    return (
      <_.PostDetail_Message>
        글이 삭제됐거나 이전되었습니다.
      </_.PostDetail_Message>
    );
  }

  return (
    <_.PostDetail_Layout isRepliedComment={isRepliedComment}>
      <Header title="글 상세" />
      <_.PostDetail_Container>
        <_.PostDetail_SapceBetween>
          <_.PostDetail_TagBox>{post.tag}</_.PostDetail_TagBox>
          <KebabMenu onClick={() => {}} />
        </_.PostDetail_SapceBetween>
        <_.PostDetial_Title>{post.title}</_.PostDetial_Title>
        <_.PostDetail_Info>{` ${post['creator.nickname']} · ${getDayMinuteCounter(post.createdAt)}`}</_.PostDetail_Info>
        <_.PostDetail_Description>{post.des}</_.PostDetail_Description>
        <Slider {...slider}>
          {post.images?.map((image: string, index: number) => (
            <_.PostDetail_Image
              backgroundImage={image}
              key={index}
              onClick={() => openModal(image)}
            >
              <_.PostDetail_ImageIndex>
                {index + 1} / {post.images?.length}
              </_.PostDetail_ImageIndex>
            </_.PostDetail_Image>
          ))}
        </Slider>
        <_.PostDetail_Reaction>
          <Heart
            width="20"
            height="20"
            isFilled={isLiked}
            onClick={handleLikeClick}
          />
          <_.PostDetail_LikeCount>
            좋아요 {post.wishCount}
          </_.PostDetail_LikeCount>
        </_.PostDetail_Reaction>
        <_.PostDetail_Line />
        <_.PostDetail_CommentCount>
          댓글 {post.CommentsCount}
        </_.PostDetail_CommentCount>
        <_.PostDetail_Comments>
          {post?.comments.map((comment) => {
            return (
              <Comment
                key={comment.commnetsId}
                comment={comment}
                onReplyClick={() =>
                  handleReplyClick(comment.author.nickname, comment.commnetsId)
                }
              />
            );
          })}
        </_.PostDetail_Comments>
      </_.PostDetail_Container>
      <_.PostDetail_Bottom>
        {isRepliedComment && replyingTo && (
          <_.PostDetail_Replying>
            {replyingTo.nickname}님에게 답글을 남기는 중...
            <X onClick={closeReply} />
          </_.PostDetail_Replying>
        )}
        <_.PostDetail_TypingContainer>
          <_.PostDetail_ProfileImage />
          <_.PostDetail_TypingBox>
            <_.PostDetail_Textarea
              value={message}
              placeholder="댓글을 입력하세요..."
              rows={1}
              ref={textareaRef}
              onChange={resizeHeight}
            />
            <_.PostDetail_SendIcon onClick={submitComment}>
              <Send stroke={message ? theme.primary[7] : theme.gray[2]} />
            </_.PostDetail_SendIcon>
          </_.PostDetail_TypingBox>
        </_.PostDetail_TypingContainer>
      </_.PostDetail_Bottom>
      <ImageDetail
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </_.PostDetail_Layout>
  );
};

export default PostDetail;
