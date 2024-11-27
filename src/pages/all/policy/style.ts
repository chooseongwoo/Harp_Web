import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Policy_Layout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Policy_Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 90px);
  overflow-y: scroll;
  padding: 0 20px;
  flex-direction: column;
`;

export const Policy_Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-top: 18px;
`;

export const Policy_SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 700;
  font-size: 24px;
`;

export const Policy_SubTitle_Highlight = styled.div`
  width: max-content;
  color: ${theme.primary[7]};
  font-weight: 700;
  font-size: 24px;
`;

export const Policy_Deatil = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NextButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NextButton = styled.button`
  width: 90%;
  height: 50px;
  background-color: ${theme.primary[7]};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;
