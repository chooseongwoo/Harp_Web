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
  comments: string[];
}
