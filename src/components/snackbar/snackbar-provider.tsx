import { Snackbar } from '@mui/material';
import SnackbarContext from './snackbar-context';
import { useCallback, useState } from 'react';

type Props = {
  children: React.ReactNode;
}

export default function SnackbarProvider({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const enqueueSnackbar = useCallback((message: string) => {
    setMessage(message);
    setOpen(true);
  }, []);

  return (
    <SnackbarContext.Provider value={{ enqueueSnackbar }}>
      <Snackbar open={open} message={message} />
      {children}
    </SnackbarContext.Provider>
  )
}
