import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const ReplyComment_Layout = styled.div`
  width: 100%;
  display: flex;
`;

export const ReplyComment_ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const ReplyComment_Profile = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 1px solid ${theme.gray[1]};
  background-color: pink;
  flex-shrink: 0;
`;

export const ReplyComment_Nickname = styled.div`
  color: ${theme.gray.black};
  font-size: 15px;
  font-weight: 500;
`;

export const ReplyComment_Time = styled.div`
  color: ${theme.gray[3.5]};
  font-size: 12px;
  font-weight: 400;
`;

export const ReplyComment_Description = styled.div`
  color: ${theme.gray.black};
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;
