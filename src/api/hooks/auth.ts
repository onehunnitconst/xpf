import { useMutation } from '@tanstack/react-query';
import { LoginRequest, LoginResponse } from '@/models/auth';
import { useMemo } from 'react';
import axios from 'axios';

export function useLogin({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: LoginResponse) => void;
  onError?: (error: unknown) => void;
}) {
  const { mutate } = useMutation({
    mutationFn: async (data: LoginRequest) => {
      const response = await axios.post('/api/authentication/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    },
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  const memoizedData = useMemo(
    () => ({
      login: mutate,
    }),
    [mutate]
  );

  return memoizedData;
}
