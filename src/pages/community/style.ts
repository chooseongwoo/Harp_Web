import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Community_Layout = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Community_Header = styled.header`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Community_Header_Title = styled.p`
  color: ${theme.gray.black};
  font-size: 19px;
  font-weight: 600;
`;

export const Community_CategoryList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-left: 20px;
`;

export const Community_Category = styled.div<{ isSelected?: boolean }>`
  padding: 3px 14px;
  border-radius: 500px;
  background-color: ${(props) =>
    props.isSelected ? theme.primary[7] : theme.sub[1]};
  color: ${(props) => (props.isSelected ? theme.gray.white : theme.gray.black)};
  box-shadow: 0px 0px 3px 0px #f1f1f1;
  font-size: 16px;
  font-weight: 500;
`;
