import ProfileView from '@/views/profile/profile-view';

type Props = {
  params: {
    userId: string;
  };
};

export default function ProfilePage({ params }: Props) {
  return <ProfileView userId={params.userId} />;
}
