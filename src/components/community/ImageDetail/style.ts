import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const ImageDetail_Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;



export const ImageDetail_Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ImageDetail_DeleteIcon = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  cursor: pointer;
  z-index: 2;
`;
