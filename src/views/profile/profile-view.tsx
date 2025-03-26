'use client';

import { Box, Grid2, Stack } from '@mui/material';
import BasicProfile from './components/basic-profile';
import InterestItemGroup from './components/interest-item-group';
import Settings from './components/settings';

export default function ProfileView() {
  return (
    <Box>
      <Grid2 container>
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
  );
}
