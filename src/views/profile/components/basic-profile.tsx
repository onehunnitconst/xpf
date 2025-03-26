import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';

export default function BasicProfile() {
  return (
    <Paper variant='outlined' sx={{ borderRadius: 4, p: 4 }}>
      <Stack alignItems='center' spacing={2}>
        <Avatar sx={{ width: 100, height: 100 }} />
        <Stack alignItems='center'>
          <Typography variant='h5'>John Doe</Typography>
          <Typography variant='body1' color='text.secondary'>
            @johndoe
          </Typography>
        </Stack>

        <Box
          sx={{
            backgroundColor: (t) => t.palette.grey[200],
            width: 300,
            borderRadius: 4,
            p: 2,
          }}
        >
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
