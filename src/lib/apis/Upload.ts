import { AuthInstance, DefaultInstance } from './Axios';

export const Upload_Image = async (formData: FormData) => {
  const { data } = await DefaultInstance.post(`/image/profile`, formData);
  return data;
};
