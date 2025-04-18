import { axiosInstance } from '@/api/fetcher';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const { username, password } = await request.json();

  const response = await axiosInstance.post('/authentication/login', {
    username,
    password,
  });

  cookieStore.set('access_token', response.data.token);

  return NextResponse.json(response.data);
}
