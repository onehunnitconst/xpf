import ProfileView from '@/views/profile/profile-view';

type PageProps = Promise<{
  userId: string;
}>;

export default async function ProfilePage({ params }: { params: PageProps }) {
  const { userId } = await params;
  return <ProfileView userId={userId} />;
}
