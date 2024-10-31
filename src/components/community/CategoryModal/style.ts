import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const CategoryModal_Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryModal_Layout = styled.div`
  background-color: ${theme.gray.white};
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

export const CategoryModal_List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const CategoryModal_Item = styled.li`
  cursor: pointer;
  padding: 10px 0;
  border-bottom: 1px solid ${theme.gray[2]};
  &:hover {
    background-color: ${theme.gray[1]};
  }
`;

export const CategoryModal_CloseButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: ${theme.primary[7]};
  color: ${theme.gray.white};
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: ${theme.gray[4]};
  }
`;
