import { AuthInstance, DefaultInstance } from './Axios';

export const Auth_KakaoLogin = async (code: string) => {
  const { data } = await DefaultInstance.post(
    `/api/auth/login/kakao?code=${code}`
  );
  return data;
};

interface UserInfoParams {
  nickname: string;
  birthday: string;
  gender: string;
}

export const Auth_UserInfo = async (params: UserInfoParams) => {
  const { data } = await AuthInstance.put(`/user`, params);
  return data;
};

interface SuveryParams {
  food: string[];
  mbti: string;
  travel: string[];
  content: string;
}

export const Auth_Survey = async (params: SuveryParams) => {
  const { data } = await AuthInstance.post(`/survey`, {
    food: params.food,
    mbti: params.mbti,
    travel: params.travel,
    conent: params.content
  });
  return data;
};
