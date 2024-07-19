import axios from 'axios';
import { config } from './config.ts';

export const apiService = axios.create({
  baseURL: config.api_url,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getListMeters = async (limit: number, offset: number) => {
  return await apiService
    .get(`meters/?limit=${limit}&offset=${offset}`)
    .then((response) => {
      return response.data;
    });
};

export const getAddress = async (id: string) => {
  return await apiService.get(`areas/?id__in=${id}`).then((response) => {
    return console.log(response.data);
  });
};

export const deleteMeter = async (meterId: string) => {
  return await apiService.delete(`meters/:${meterId}`).then((response) => {
    return console.log(response.data);
  });
};
