import { AuthInstance } from './Axios';

export const Community_AllPost = async () => {
  const { data } = await AuthInstance.get(`/community`);
  return data;
};
