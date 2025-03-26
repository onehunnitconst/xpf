'use client';

import { useCounterStore } from '@/utils/zustand/stores/counter';
import { Button, Stack, Typography } from '@mui/material';

export default function CounterZustandView() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementByAmount = useCounterStore((state) => state.incrementByAmount);

  return (
    <Stack alignItems='center' justifyContent='center' height='100vh'>
      <Typography variant='h1'>{count}</Typography>
      <Stack direction='row' spacing={2}>
        <Button onClick={() => increment()}>Increment</Button>
        <Button onClick={() => decrement()}>Decrement</Button>
        <Button onClick={() => incrementByAmount(10)}>Increment by 10</Button>
      </Stack>
    </Stack>
  );
}
