import { Avatar, Box, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { useProfileViewContext } from '../context/profile-view-context';
import useGetProfile from '@/api/hooks/profiles';

export default function BasicProfile() {
  const { id } = useProfileViewContext();
  const { profileData, profileLoading, profileError } = useGetProfile(id);

  return (
    <Paper variant='outlined' sx={{ borderRadius: 4, p: 4, width: '100%' }}>
      <Stack alignItems='center' spacing={2}>
        <Avatar
          sx={{ width: 100, height: 100 }}
          src={profileData?.profile_image}
        />
        <Stack alignItems='center'>
          <Typography variant='h5'>
            {!profileLoading && !profileError ? (
              profileData?.nickname
            ) : (
              <Skeleton variant='text' width={100} />
            )}
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            {!profileLoading && !profileError ? (
              `@${profileData?.x_account_id}`
            ) : (
              <Skeleton variant='text' width={100} />
            )}
          </Typography>
        </Stack>

        <Box
          sx={{
            backgroundColor: (t) => t.palette.grey[200],
            width: '100%',
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
    </Paper>
  );
}
