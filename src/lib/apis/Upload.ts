import { DefaultInstance } from './Axios';

export const Upload_Image = async (formData: FormData) => {
  const { data } = await DefaultInstance.post(`/upload/image`, formData);
  return data;
};
