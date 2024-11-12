import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PostDetail_Layout = styled.div<{ isRepliedComment: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding-bottom: ${(props) => (props.isRepliedComment ? '90px' : '60px')};
`;

export const PostDetail_Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: calc(100% - 60px);
  overflow: auto;
`;

export const PostDetail_SapceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PostDetail_TagBox = styled.div`
  border-radius: 5px;
  padding: 5px 8px;
  background-color: ${theme.sub[1]};
  color: ${theme.gray.black};
  font-size: 12px;
`;

export const PostDetial_Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.gray.black};
  margin-top: 8px;
`;

export const PostDetail_Info = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: ${theme.gray['3.5']};
`;

export const PostDetail_Description = styled.div`
  margin-top: 10px;
  font-size: 17px;
  color: ${theme.gray.black};
`;

export const PostDetail_Image = styled.div<{ backgroundImage: string }>`
  max-width: 500px;
  margin-top: 15px;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.backgroundImage});
`;

export const PostDetail_Reaction = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  gap: 4px;
`;

export const PostDetail_LikeCount = styled.span`
  font-size: 16px;
  color: ${theme.gray.black};
`;

export const PostDetail_Line = styled.div`
  border: 5px solid ${theme.gray[0]};
  margin: 30px -20px 0 -20px;
`;

export const PostDetail_CommentCount = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${theme.gray.black};
  padding: 10px 0 15px 0;
`;

export const PostDetail_Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PostDetail_ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: pink;
  flex-shrink: 1;
  border: 1px solid ${theme.gray[1]};
`;

export const PostDetail_Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  background-color: ${theme.gray.white};
`;

export const PostDetail_Replying = styled.div`
  width: 100%;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.gray[0]};
  color: ${theme.gray['3.5']};
`;

export const PostDetail_TypingContainer = styled.div`
  width: 100%;
  padding: 12px 20px;
  gap: 10px;
  height: max-content;
  position: relative;
  display: flex;
  align-items: center;
`;

export const PostDetail_TypingBox = styled.div`
  display: flex;
  width: 86%;
  height: auto;
  max-height: 120px;
  justify-content: space-between;
  border-radius: 40px;
  border: 1px solid ${theme.gray[1]};
  padding: 13px 24px 13px 24px;
`;

export const PostDetail_Textarea = styled.textarea`
  width: 88%;
  height: auto;
  max-height: 100px;
  border: none;
  outline: none;
  color: ${theme.gray.black};
  background-color: ${theme.gray.white};
  &::placeholder {
    color: ${theme.gray[2]};
  }
  font-size: 14px;
  font-weight: 400;
  resize: none;
  overflow-y: auto;
`;

export const PostDetail_SendIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const PostDetail_ImageIndex = styled.div`
  text-align: center;
  font-size: 12px;
  color: ${theme.gray.white};
  display: flex;
  padding: 4px 8px;
  align-items: center;
  bottom: 10px;
  right: 10px;
  position: absolute;
  border-radius: 16px;
  background: rgba(102, 102, 102, 0.3);
`;

export const PostDetail_Message = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${theme.gray['2.5']};
`;
