import ProfileView from '@/views/profile/profile-view';

export default function ProfilePage({ params }: { params: { userId: string } }) {
  return <ProfileView userId={params.userId} />;
}
