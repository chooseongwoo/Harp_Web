// 라이브러리
import React, { ChangeEvent, useState } from 'react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import axios from 'axios';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import NextButton from 'components/NextButton';
import { useFlow } from 'stackflow';

const Register = () => {
  const { pop } = useFlow();
  const title = '환영합니다!\n회원정보를 입력해주세요.';
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    axios
      .post(`${process.env.REACT_APP_API}/auth/signup`, {
        email: formData.email,
        password: formData.password,
        name: 'name'
      })
      .then((response) => {
        alert(response.data.message);
        pop();
      });
  };

  const isFormValid =
    formData.email &&
    formData.password &&
    formData.password === formData.confirmPassword;

  return (
    <AppScreen>
      <Header title="회원가입" />
      <_.Register_Layout>
        <_.Register_Title_Layout>
          <_.Register_Title_Big>{title}</_.Register_Title_Big>
          <_.Register_Title_Small>
            하프 서비스 이용을 위해 활용됩니다.
          </_.Register_Title_Small>
        </_.Register_Title_Layout>
        <_.Register_Form onSubmit={handleRegisterSubmit}>
          <_.Register_Input_Layout>
            <_.Register_Input_Title>
              이메일
              <_.Register_Input_Title_Star>*</_.Register_Input_Title_Star>
            </_.Register_Input_Title>
            <_.Register_Input_Box
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요."
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
            />
          </_.Register_Input_Layout>
          <_.Register_Input_Layout>
            <_.Register_Input_Title>
              비밀번호
              <_.Register_Input_Title_Star>*</_.Register_Input_Title_Star>
            </_.Register_Input_Title>
            <_.Register_Input_Box
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              autoComplete="off"
              value={formData.password}
              onChange={handleChange}
            />
          </_.Register_Input_Layout>
          <_.Register_Input_Layout>
            <_.Register_Input_Title>
              비밀번호 확인
              <_.Register_Input_Title_Star>*</_.Register_Input_Title_Star>
            </_.Register_Input_Title>
            <_.Register_Input_Box
              type="password"
              name="confirmPassword"
              placeholder="비밀번호를 다시 입력해주세요."
              autoComplete="off"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </_.Register_Input_Layout>
        </_.Register_Form>
      </_.Register_Layout>
      <NextButton
        text="다음"
        state={!!isFormValid}
        onNextClick={handleRegisterSubmit}
      />
    </AppScreen>
  );
};

export default Register;
