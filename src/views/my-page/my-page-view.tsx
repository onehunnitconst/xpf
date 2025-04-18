'use client';

import { Box, Grid2, Stack } from '@mui/material';
import BasicProfile from './components/basic-profile';
import Settings from '@mui/icons-material/Settings';
import InterestItemGroup from './components/interest-item-group';

export default function MyPageView() {
  return (
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
  );
}
