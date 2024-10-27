import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Community_Layout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 20px;
`;

export const Community_Header = styled.header`
  width: 100%;
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
`;

export const Community_Header_Title = styled.p`
  color: ${theme.gray.black};
  font-size: 19px;
  font-weight: 600;
`;
