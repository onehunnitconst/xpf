import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material';
import { useProfileViewContext } from '../context/profile-view-context';
import useGetProfile from '@/api/hooks/profiles';

export default function BasicProfile() {
  const { id } = useProfileViewContext();
  const { profileData, profileLoading, profileError } = useGetProfile(id);

  return (
    <Stack direction='row' spacing={2} minWidth='xs'>
      <Avatar
        variant='rounded'
        sx={{ width: 100, height: 100, borderRadius: 4 }}
        src={profileData?.profile_image}
      />
      <Box
        sx={{
          backgroundColor: (t) => t.palette.grey[200],
          flexGrow: 1,
          borderRadius: 4,
          p: 2,
        }}
      >
        <Typography
          variant='body2'
          color={
            !profileLoading && !profileError
              ? profileData.bio.length > 0
                ? 'text.primary'
                : 'text.secondary'
              : 'text.disabled'
          }
        >
          {!profileLoading && !profileError ? (
            profileData.bio.length > 0 ? (
              profileData.bio
            ) : (
              '아직 바이오가 없습니다.'
            )
          ) : (
            <Skeleton variant='text' width={100} />
          )}
        </Typography>
      </Box>
    </Stack>
  );
}
