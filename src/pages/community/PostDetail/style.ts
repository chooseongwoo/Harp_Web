import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const PostDetail_Layout = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100vh - 40px);
`;

export const PostDetail_Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 100%;
`;

export const PostDetail_TagBox = styled.div`
  padding: 5px 8px;
  background-color: ${theme.sub[1]};
  color: ${theme.gray.black};
`