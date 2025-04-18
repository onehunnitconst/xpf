import { createContext, useContext } from 'react';

type SnackbarContextProps = {
  enqueueSnackbar: (message: string) => void;
};

const SnackbarContext = createContext<SnackbarContextProps>({} as SnackbarContextProps);

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export default SnackbarContext;
