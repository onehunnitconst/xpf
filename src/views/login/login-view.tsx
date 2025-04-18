'use client';

import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useLogin } from '@/api/hooks/auth';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginView() {
  const router = useRouter();

  const { login } = useLogin({
    onSuccess: () => {
      router.push('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      login({
        username: data.get('username') as string,
        password: data.get('password') as string,
      });
    },
    [login]
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Stack spacing={2}>
        <Typography variant='h4'>로그인</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={1} mb={2}>
            <TextField
              placeholder='아이디'
              fullWidth
              size='small'
              name='username'
            />
            <TextField
              placeholder='비밀번호'
              type='password'
              fullWidth
              size='small'
              name='password'
            />
          </Stack>
          <Button variant='contained' color='primary' type='submit' fullWidth>
            로그인
          </Button>
        </form>
      </Stack>
    </Box>
  );
}
