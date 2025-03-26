import { QueryClient } from '@tanstack/react-query';

export default function getTanstackQueryClient() {
  return new QueryClient();
}