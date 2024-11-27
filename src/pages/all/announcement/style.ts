import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Announcement_Layout = styled.div`
  width: 100vw;
  height: max-content;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Announcement_Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 20px;
  border-bottom: 1px solid ${theme.gray[2]};
  background: #fff;
`;

export const Announcement_Title = styled.div`
  color: ${theme.gray.black};
  font-size: 17px;
  font-weight: 500;
`;

export const Announcement_Date = styled.div`
  color: ${theme.gray.black};
  font-size: 14px;
  font-weight: 400;
`;
