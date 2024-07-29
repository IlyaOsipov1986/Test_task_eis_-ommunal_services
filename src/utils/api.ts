import axios from 'axios';
import { config } from './config.ts';
import { TRequest } from '../types/meters';

export const apiService = axios.create({
  baseURL: config.api_url,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getListMeters = async (limit: number, offset: number) => {
  const responseMeters: TRequest = await apiService
    .get(`meters/?limit=${limit}&offset=${offset}`)
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
  return responseMeters;
};

export const getAddress = (id: string | undefined) => {
  const responseAddress: TRequest = apiService
    .get(`areas/?id__in=${id}`)
    .then((response) => response.data.results[0])
    .catch((error) => console.log(error));
  return responseAddress;
};

export const deleteMeter = async (meterId: string) => {
  return await apiService
    .delete(`meters/:${meterId}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
