import { createContext, useContext } from 'react';

type ProfileViewContextProps = {
  id: number;
};

export const ProfileViewContext = createContext({} as ProfileViewContextProps);

export function useProfileViewContext() {
  const context = useContext(ProfileViewContext);

  if (!context) {
    throw new Error('useProfileViewContext must be used within a ProfileViewContext');
  }
  
  return context;
}