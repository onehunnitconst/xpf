import { Stack, Typography } from '@mui/material';
import InterestItem from './interest-item';
import { useProfileViewContext } from '../context/profile-view-context';
import { useGetInterestItems } from '@/api/hooks/profiles';

export default function InterestItemGroup() {
  const { id } = useProfileViewContext();
  const { interestItems, interestItemsLoading, interestItemsError } =
    useGetInterestItems(id);

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        {interestItemsLoading && !interestItemsError && (
          <Typography variant='h6'>아직 등록한 관심사가 없습니다.</Typography>
        )}
        {!interestItemsLoading &&
          !interestItemsError &&
          interestItems.map((item) => (
            <InterestItem key={item.id.toString()} item={item} />
          ))}
      </Stack>
    </Stack>
  );
}
