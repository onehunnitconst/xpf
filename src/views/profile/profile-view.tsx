'use client';

import { Box, Grid2, Stack } from '@mui/material';
import BasicProfile from './components/basic-profile';
import InterestItemGroup from './components/interest-item-group';
import Settings from './components/settings';
import ProfileViewContextProvider from './context/profile-view-context-provider';

type Props = {
  userId: string;
};

export default function ProfileView({ userId }: Props) {
  return (
    <ProfileViewContextProvider id={+userId}>
      <Box>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Stack alignItems='center' spacing={2} my={8}>
              <BasicProfile />
              <Settings />
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8 }} my={8}>
            <InterestItemGroup />
          </Grid2>
        </Grid2>
      </Box>
    </ProfileViewContextProvider>
  );
}
