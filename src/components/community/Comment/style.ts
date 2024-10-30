import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Comment_Layout = styled.div`
  padding-bottom: 10px;
  width: 100%;
  display: flex;
`;

export const Comment_ColContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Comment_Profile = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 100%;
  border: 1px solid ${theme.gray[1]};
  background-color: pink;
  flex-shrink: 0;
`;

export const Conmment_Nickname = styled.div`
  color: ${theme.gray.black};
  font-size: 15px;
  font-weight: 500;
`;

export const Conmment_Time = styled.div`
  color: ${theme.gray[3.5]};
  font-size: 12px;
  font-weight: 400;
`;

export const Conmment_Description = styled.div`
  color: ${theme.gray.black};
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

export const Conmment_Reply = styled.div`
margin-top: 5px;
  font-size: 12px;
  color: ${theme.gray[3.5]};
  align-items: center;
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
`
