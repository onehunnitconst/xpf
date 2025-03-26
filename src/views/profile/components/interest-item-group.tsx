import { Grid2, Stack, Typography } from '@mui/material';
import InterestItem from './interest-item';

export default function InterestItemGroup() {
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Typography variant='h5' fontWeight={700}>리듬게임</Typography>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InterestItem />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InterestItem />
          </Grid2>
        </Grid2>
      </Stack>
    </Stack>
  );
}
