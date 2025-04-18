import { HOST_API } from '@/constants';
import axios, { AxiosRequestConfig } from 'axios';
import { getToken } from './utils/cookies';

export const axiosInstance = axios.create({ baseURL: HOST_API });

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const response = await axiosInstance.get(url, {
    ...config,
  });

  return response.data;
};

export const fetcherWithToken = async (
  args: string | [string, AxiosRequestConfig],
) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const token = await getToken();

  const response = await axiosInstance.get(url, {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};