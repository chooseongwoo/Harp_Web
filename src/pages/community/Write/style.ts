import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Write_Layout = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
`;

export const Write_Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 100vh;
`;

export const Write_ModalButton = styled.button`
  display: flex;
  width: 100%;
  padding: 14px 16px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid ${theme.gray[1]};
  color: ${theme.gray.black};
  border-radius: 8px;
  font-size: 15px;
  margin: 10px 0 5px 0;
`;

export const Write_TitleInput = styled.input`
  border: none;
  outline: none;
  color: ${theme.gray.black};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-top: 10px;
  &::placeholder {
    color: ${theme.gray[2.5]};
  }
`;

export const Write_Line = styled.div`
  border: 1px solid ${theme.sub[1]};
  margin: 10px 0;
`

export const Write_DesInput = styled.textarea`
  border: none;
  outline: none;
  color: ${theme.gray.black};
  font-size: 16px;
  resize: none;
  min-height: 400px;
  &::placeholder {
    color: ${theme.gray[2.5]};
  }
`;

export const Write_BottomContainer = styled.div`
  position: fixed;
  bottom: 100px;
  left: 0;
  display: flex;
  width: 100%;
  padding: 13px 20px;
  background-color: white;
  gap: 12px;
  border-top: 1px solid ${theme.gray[1]};
  `;

export const Write_PhotoButton = styled.button`
gap: 3px;
  display: flex;
  align-items: center;
  border: none;
  font-size: 16px;
color: ${theme.gray[3]};
  cursor: pointer;
  background-color: #fff;
`;

export const Write_LocationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.gray[1]};
  border: 1px solid ${theme.gray[2]};
  border-radius: 8px;
  padding: 10px;
  font-size: 15px;
  margin: 10px 0;
  cursor: pointer;
`;

export const KeyboardToggleButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;