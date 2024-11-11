import { AuthInstance } from './Axios';

export const Community_AllPost = async () => {
  const { data } = await AuthInstance.get(`/community`);
  return data;
};

export const Community_OnePost = async (id: string) => {
  const { data } = await AuthInstance.get(`/community/one/${id}`);
  return data;
};
