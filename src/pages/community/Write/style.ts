import Delete from 'assets/Icon/Delete';
import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Write_Layout = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
`;

export const Write_Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 70px 20px;
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
  font-weight: 600;
  margin: 0 10px;
  &::placeholder {
    color: ${theme.gray[2.5]};
  }
`;

export const Write_Line = styled.div`
  border: 1px solid ${theme.sub[1]};
  margin: 10px 0;
`;

export const Write_DesInput = styled.textarea`
  border: none;
  outline: none;
  color: ${theme.gray.black};
  font-size: 16px;
  resize: none;
  min-height: 300px;
  &::placeholder {
    color: ${theme.gray[2.5]};
  }
`;

export const Write_BottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  padding: 13px 20px;
  background-color: white;
  gap: 12px;
  border-top: 1px solid ${theme.gray[1]};
  z-index: 1;
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
  gap: 3px;
  display: flex;
  align-items: center;
  border: none;
  font-size: 16px;
  color: ${theme.gray[3]};
  cursor: pointer;
  background-color: #fff;
`;


export const Write_ImageContainer = styled.div<{ backgroundImage: string }>`
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: 100%;
  border-radius: 8px;
  border: 1px solid ${theme.gray[1]};
  margin-top: 20px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Write_DeleteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 2;
`;