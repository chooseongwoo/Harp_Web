import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const WishList_Layout = styled.div`
  width: 100vw;
  height: max-content;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 20px;
`;

export const WishList_Not = styled.div`
  padding: 20px 20px 0%;
  width: 100%;
  height: calc(100vh - 400px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.gray['2.5']};
`;
