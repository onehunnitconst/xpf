import {
  Avatar,
  Box,
  Paper,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import { UserInterestItem } from '@/models/profiles';
type Props = {
  key: string;
  item: UserInterestItem;
};

export default function InterestItem({ key, item }: Props) {
  return (
    <Box flexGrow={1} key={key}>
      <Paper variant='outlined' sx={{ width: '100%', borderRadius: 4 }}>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction='row' alignItems='center' spacing={1.5}>
              <Avatar variant='rounded' sx={{ width: 64, height: 64 }} />
              <Stack>
                <Typography variant='body2' fontWeight={500} color='text.secondary'>
                  {item.category}
                </Typography>
                <Typography variant='h6' fontWeight={700}>
                  {item.title}
                </Typography>
              </Stack>
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
              <Typography variant='body2'>
                {item.memo}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Paper>
    </Box>
  );
}
