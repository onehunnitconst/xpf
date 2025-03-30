export type UserProfile = {
  id: number;
  x_account_id: string;
  nickname: string;
  profile_image?: string;
  bio: string;
};

export type UserInterestItem = {
  id: number;
  user_id: number;
  title: string;
  image_url: string;
  category: string;
  memo: string;
};
