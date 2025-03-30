import { ProfileViewContext } from './profile-view-context';

type Props = {
  children: React.ReactNode;
  id: number;
};

export default function ProfileViewContextProvider({ children, id }: Props) {
  return (
    <ProfileViewContext.Provider value={{ id }}>
      {children}
    </ProfileViewContext.Provider>
  );
}
