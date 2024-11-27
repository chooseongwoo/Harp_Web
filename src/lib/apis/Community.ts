import { AuthInstance } from './Axios';

export const Community_AllPost = async () => {
  const { data } = await AuthInstance.get(`/community`);
  return data;
};

export const Community_OnePost = async (id: string) => {
  const { data } = await AuthInstance.get(`/community/one/${id}`);
  return data;
};

export const Community_GetWish = async () => {
  const { data } = await AuthInstance.get(`/community/wish`);
  return data;
};

export const Community_PostWish = async (id: string) => {
  const { data } = await AuthInstance.post(`/community/wish/change/${id}`);
  return data;
};

export const Community_IsLike = async (id: string) => {
  const { data } = await AuthInstance.get(`/community/wish/islike/${id}`);
  return data;
};

interface CommentParams {
  des: string;
  isCommentForComment: boolean;
  parentComment?: number;
  communityId: number;
}

export const Community_AddComment = async (params: CommentParams) => {
  const { data } = await AuthInstance.post(`/community/comment`, params);
  return data;
};

interface PostParams {
  title: string;
  des: string;
  tag: string;
  images: string[];
}

export const Community_CreatePost = async (params: PostParams) => {
  const { data } = await AuthInstance.post(`/community`, params);
  return data;
};
