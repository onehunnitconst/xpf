import { Grid2, IconButton, Stack, Typography } from '@mui/material';
import InterestItemEdit from './interest-item-edit';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

export default function InterestItemGroup() {
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Stack direction='row' justifyContent='space-between' spacing={1.5}>
          <Stack direction='row' alignItems='center'>
            <Typography variant='h5' fontWeight={700}>
              리듬게임
            </Typography>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Stack>

          <Stack direction='row'>
            <IconButton>
              <AddIcon />
            </IconButton>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InterestItemEdit />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InterestItemEdit />
          </Grid2>
        </Grid2>
      </Stack>
    </Stack>
  );
}
