'use client';

import getTanstackQueryClient from '@/utils/tanstack/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';

export default function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useMemo(() => getTanstackQueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
