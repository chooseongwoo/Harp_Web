// 라이브러리
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import NextButton from 'components/NextButton';
import { useFlow } from 'stackflow';
import axios from 'axios';
import { Auth_KakaoLogin } from 'lib/apis/Auth';

const Login = () => {
  const { push, replace } = useFlow();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_API}/auth/signin`, {
        email: formData.email,
        password: formData.password,
        name: 'name'
      })
      .then(async (response) => {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        const data = await Auth_KakaoLogin();
        if (data.data.newAccount === '1') {
          replace('Terms', {}, { animate: false });
        } else replace('Home', {}, { animate: false });
      });
  };

  const isFormValid = formData.email && formData.password;

  return (
    <AppScreen>
      <Header title="로그인" />
      <_.Login_Layout>
        <_.Login_Form onSubmit={handleLoginSubmit}>
          <_.Login_Input_Box
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            value={formData.email}
            onChange={handleChange}
          />
          <_.Login_Input_Box
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={formData.password}
            onChange={handleChange}
          />
          <_.Login_Black_Text>
            하프가 처음이신가요?
            <_.Login_Black_Span
              onClick={() => {
                push('Register', {});
              }}
            >
              {' '}
              회원가입
            </_.Login_Black_Span>
          </_.Login_Black_Text>
        </_.Login_Form>
      </_.Login_Layout>
      <NextButton
        text="로그인"
        state={!!isFormValid}
        onNextClick={handleLoginSubmit}
      />
    </AppScreen>
  );
};

export default Login;
