'use client';

import { Box, Stack } from '@mui/material';
import BasicProfile from './components/basic-profile';
import InterestItemGroup from './components/interest-item-group';
import ProfileViewContextProvider from './context/profile-view-context-provider';
import ProfileHeader from './components/profile-header';

type Props = {
  userId: string;
};

export default function ProfileView({ userId }: Props) {
  return (
    <ProfileViewContextProvider id={+userId}>
      <Box>
        <ProfileHeader />
        <Stack spacing={3} mt={3}>
          <BasicProfile />
          <Stack>
            <InterestItemGroup />
          </Stack>
        </Stack>
      </Box>
    </ProfileViewContextProvider>
  );
}
