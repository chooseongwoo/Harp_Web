import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const CategoryModal_Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryModal_Layout = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${theme.gray.white};
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  text-align: center;
  display: inline-flex;
  padding: 25px 20px 200px 20px;
  flex-direction: column;
  align-items: center;
`;

export const CategoryModal_Title = styled.div`
  font-size: 18px;
  color: ${theme.gray.black};
  font-weight: 600;
`;
export const CategoryModal_List = styled.ul`
  width: 100%;
  margin-top: 3px;
  background-color: ${theme.gray.white};
`;

export const CategoryModal_Item = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${theme.gray.white};
  color: ${theme.gray.black};
  font-size: 16px;
  display: flex;
  padding: 16px;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  border-bottom: 1px solid ${theme.sub[1]};
`;
