export interface community {
  communityId?: number;
  title: string;
  author?: string;
  des?: string;
  tag: string[];
  createdAt?: string;
  updatedAt: string;
  wishCount: number;
  commentCount: number;
  images?: string[];
}
