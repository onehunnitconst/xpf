'use server';

import { cookies } from 'next/headers';

export async function saveToken(token: string) {
  const cookieStore = await cookies();
  cookieStore.set('access_token', token);
}

export async function getToken() {
  const cookieStore = await cookies();
  return cookieStore.get('access_token')?.value;
}
