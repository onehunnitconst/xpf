import { Stack, Typography } from '@mui/material';
import InterestItem from './interest-item';
import { useGetMyInterestItems } from '@/api/hooks/users';

export default function InterestItemGroup() {
  const { interestItems, interestItemsLoading, interestItemsError } =
    useGetMyInterestItems();

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
