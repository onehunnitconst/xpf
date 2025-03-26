'use client';

import { Box, Button, Grid2, Stack, Typography } from '@mui/material';
import BasicProfileEditor from './components/basic-profile-editor';
import InterestItemGroupEdit from './components/interest-item-group-edit';

export default function EditProfileView() {
  return (
    <Box>
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Stack alignItems='center' spacing={2} my={8}>
            <BasicProfileEditor />
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }} my={8}>
          <Stack direction='row' justifyContent='end' spacing={2} mb={4}>
            <Button variant='outlined' color='error' >
              <Typography variant='body1' fontWeight={700}>
                관심사 그룹 추가하기
              </Typography>
            </Button>
            <Button variant='outlined' color='primary'>
              <Typography variant='body1' fontWeight={700}>
                완료하기
              </Typography>
            </Button>
          </Stack>
          <InterestItemGroupEdit />
        </Grid2>
      </Grid2>
    </Box>
  );
}
