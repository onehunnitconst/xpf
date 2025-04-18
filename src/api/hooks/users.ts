import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import { fetcherWithToken } from '../fetcher';
import { paths } from '../paths';
import { useMemo } from 'react';
import { UserInterestItem, UserProfile } from '@/models/profiles';

export default function useGetMyProfile() {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKeys.users.get],
    queryFn: () => fetcherWithToken(paths.users.get),
  });

  const memoizedData = useMemo(
    () => ({
      profileData: data as UserProfile,
      profileLoading: isLoading,
      profileError: error,
    }),
    [data, isLoading, error],
  );

  return memoizedData;
}

export function useGetMyInterestItems() {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKeys.users.getItems],
    queryFn: () => fetcherWithToken(paths.users.getItems),
  });

  const memoizedData = useMemo(
    () => ({
      interestItems: data as UserInterestItem[],
      interestItemsLoading: isLoading,
      interestItemsError: error,
    }),
    [data, isLoading, error],
  );

  return memoizedData;
}