import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Login_Layout = styled.div`
  width: 100vw;
  height: calc(100vh - 40px);
  padding: 20px;
`;

export const Login_Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Login_Input_Box = styled.input`
  width: 100%;
  height: 56px;
  padding-left: 16px;
  font-size: 16px;
  color: ${theme.gray[4]};
  border: 1.5px solid ${theme.gray[2]};
  border-radius: 5px;
  font-weight: 400;

  &:focus {
    outline: none;
    border: 1.5px solid ${theme.primary[7]};
  }
  &::placeholder {
    color: ${theme.gray[2]};
  }
  caret-color: ${theme.primary[7]};
`;

export const Login_Black_Text = styled.p`
  color: ${theme.gray.black};
  font-size: 15px;
  font-weight: 400;
  text-align: center;
`;

export const Login_Black_Span = styled.span`
  color: ${theme.gray.black};
  font-size: 15px;
  font-weight: 600;
  text-align: center;
`;
