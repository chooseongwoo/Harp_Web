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
`