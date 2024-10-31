import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Write_Layout = styled.div`
  position: fixed;
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
  border-radius: 8px;
  font-size: 15px;
  margin: 10px 0 5px 0;
`;

export const Write_TitleInput = styled.input`
  border: none;
  outline: none;
  color: ${theme.gray.black};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  margin-top: 10px;
  ::placeholder {
    color: red;
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
  font-size: 15px;
  resize: none;
  min-height: 400px;
  ::placeholder {
    color: red;
  }
`;