import Settings from '@/views/profile/components/settings';
import { Box, Skeleton, Stack, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useProfileViewContext } from '../context/profile-view-context';
import useGetProfile from '@/api/hooks/profiles';

export default function ProfileHeader() {
  const { id } = useProfileViewContext();
  const { profileData, profileLoading, profileError } = useGetProfile(id);

  const handleAccountChipClick = useCallback(() => {
    window.open('https://x.com/onehunnitconst', '_blank');
  }, []);

  return (
    <Stack spacing={3} mt={8}>
      <Stack direction='row' justifyContent='space-between'>
        <Stack direction='row' spacing={1.5}>
          <Typography variant='h4'>
            {!profileLoading && !profileError ? (
              profileData?.nickname
            ) : (
              <Skeleton variant='text' width={100} />
            )}
          </Typography>
          <Box
            component={!profileLoading && !profileError ? 'div' : Skeleton}
            sx={{
              px: 2,
              py: 0.5,
              bgcolor: (t) => t.palette.grey[200],
              borderRadius: 4,
              '&:hover': {
                bgcolor: (t) => t.palette.grey[300],
                cursor: 'pointer',
              },
            }}
            onClick={handleAccountChipClick}
          >
            <Typography variant='h5'>{profileData?.x_account_id}</Typography>
          </Box>
        </Stack>

        <Stack direction='row' spacing={2}>
          <Settings />
        </Stack>
      </Stack>
    </Stack>
  );
}
