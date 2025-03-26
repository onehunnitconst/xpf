import { IconButton, Stack } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Settings() {
  return (
    <Stack direction='row' spacing={2}>
      <IconButton>
        <LoginIcon />
      </IconButton>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </Stack>
  );
}
