import { HOST_API } from '@/constants';
import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({ baseURL: HOST_API });

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const response = await axiosInstance.get(url, {
    ...config,
  });

  return response.data;
};