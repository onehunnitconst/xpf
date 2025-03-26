import {
  Avatar,
  Box,
  Paper,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

export default function InterestItem() {
  return (
    <Box flexGrow={1}>
      <Paper variant='outlined' sx={{ width: '100%', borderRadius: 4 }}>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction='row' alignItems='center' spacing={1.5}>
              <Avatar variant='rounded' sx={{ width: 64, height: 64 }} />
              <Typography variant='h6' fontWeight={700}>
                비트매니아 IIDX
              </Typography>
            </Stack>
            <Box
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              <Typography variant='body2' color='text.secondary'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam aliquam harum magni, repudiandae ipsum nostrum tenetur
                magnam praesentium molestiae ipsa at iure doloremque tempora
                temporibus voluptate veritatis deleniti hic a?
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Paper>
    </Box>
  );
}
