export interface community {
  communityId?: number;
  title: string;
  author?: string;
  des?: string;
  tag: string;
  createdAt?: string;
  updatedAt: string;
  wishCount: number;
  commentCount: number;
  images?: string[];
}

export interface detailPost {
  communityId: number;
  title: string;
  des: string;
  tag: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  wishCount: number;
  'creator.userId': number;
  'creator.nickname': string;
  'creator.profileImg': string;
  comments: comments[];
}

interface Author {
  userId: number;
  nickname: string;
  profileImg: string;
}

export interface comments {
  commnetsId: number;
  des: string;
  isCommentForComment: 0;
  parentComment: number | null;
  createdAt: string;
  updatedAt: string;
  likes: number;
  author: Author;
  repliesCount: number;
  replies: replyComment[];
}

interface replyComment {
  commnetsId: number;
  des: string;
  isCommentForComment: number;
  parentComment: number;
  createdAt: string;
  updatedAt: string;
  likes: number;
  author: Author;
}
