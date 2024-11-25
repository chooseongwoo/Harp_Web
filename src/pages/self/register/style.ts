import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Register_Layout = styled.div`
  width: 100vw;
  height: calc(100vh - 40px);
  padding: 20px;
`;

export const Register_Title_Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 18px;
`;

export const Register_Title_Big = styled.p`
  color: ${theme.gray[4]};
  font-size: 24px;
  font-weight: 700;
  white-space: pre-wrap;
`;

export const Register_Title_Small = styled.p`
  color: ${theme.gray[4]};
  font-size: 15px;
  font-weight: 400;
`;

export const Register_Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 10px 0;
`;

export const Register_Input_Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Register_Input_Title = styled.p`
  color: ${theme.gray[4]};
  font-size: 14px;
  font-weight: 400;
`;

export const Register_Input_Title_Star = styled.span`
  color: ${theme.sub.red};
`;

export const Register_Input_Box = styled.input`
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

export const Register_Black_Text = styled.p`
  color: ${theme.gray.black};
  font-size: 15px;
  font-weight: 400;
  text-align: center;
`;

export const Register_Black_Span = styled.span`
  color: ${theme.gray.black};
  font-size: 15px;
  font-weight: 600;
  text-align: center;
`;
