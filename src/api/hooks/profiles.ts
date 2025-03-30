import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import { fetcher } from '../fetcher';
import { paths } from '../paths';
import { useMemo } from 'react';
import { UserInterestItem, UserProfile } from '@/models/profiles';

export default function useGetProfile(id: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKeys.profiles.get, id],
    queryFn: () => fetcher(paths.profiles.get(id)),
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

export function useGetInterestItems(id: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKeys.profiles.getItems, id],
    queryFn: () => fetcher(paths.profiles.getItems(id)),
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