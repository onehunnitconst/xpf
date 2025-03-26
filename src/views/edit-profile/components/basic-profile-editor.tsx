import {
  Avatar,
  Box,
  ButtonBase,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export default function BasicProfileEditor() {
  return (
    <Paper variant='outlined' sx={{ borderRadius: 4, p: 4 }}>
      <Stack alignItems='center' spacing={2}>
        <Box sx={{ position: 'relative', width: 100, height: 100 }}>
          <Avatar
            sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}
          />
          <ButtonBase
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 2,
              borderRadius: '50%',
            }}
          >
            <AddAPhotoIcon sx={{ fontSize: 32, color: (t) => t.palette.grey[800] }} />
          </ButtonBase>
        </Box>
        <Stack alignItems='center'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: (t) => t.palette.grey[100],
              borderRadius: 2,
              px: 2,
              pt: 0.5,
            }}
          >
            <TextField
              hiddenLabel
              size='small'
              variant='standard'
              margin='none'
              placeholder='사용자명'
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: {
                    minWidth: 85,
                    maxWidth: 200,
                    fontSize: 24,
                    fontWeight: 500,
                    textAlign: 'center',
                  },
                },
                formHelperText: {
                  sx: {
                    textAlign: 'center',
                  },
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: (t) => t.palette.grey[100],
              borderRadius: 2,
              px: 2,
              pt: 0.5,
              mt: 0.5,
            }}
          >
            <TextField
              hiddenLabel
              placeholder='X 계정 ID'
              size='small'
              variant='standard'
              margin='none'
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: {
                    maxWidth: 200,
                    fontSize: 16,
                    letterSpacing: 0.5,
                    fontWeight: 500,
                    textAlign: 'center',
                  },
                  startAdornment: (
                    <Typography
                      variant='body1'
                      color='textDisabled'
                      sx={{ pb: 0.25, pr: 0.25 }}
                    >
                      @
                    </Typography>
                  ),
                },
              }}
            />
          </Box>
        </Stack>

        <Box
          sx={{
            backgroundColor: (t) => t.palette.grey[200],
            width: 300,
            borderRadius: 4,
            p: 2,
          }}
        >
          <TextField
            hiddenLabel
            size='small'
            variant='standard'
            placeholder='소개'
            multiline
            rows={3}
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
          />
        </Box>
      </Stack>
    </Paper>
  );
}
