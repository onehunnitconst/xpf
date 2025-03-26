'use client';

import { useAppDispatch, useAppSelector } from '@/utils/redux/hooks';
import { decrement, increment, incrementByAmount } from '@/utils/redux/stores/counter';
import { Button, Stack, Typography } from '@mui/material';

export default function CounterReduxView() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Stack alignItems='center' justifyContent='center' height='100vh'>
      <Typography variant='h1'>{count}</Typography>
      <Stack direction='row' spacing={2}>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </Button>
      </Stack>
    </Stack>
  );
}
