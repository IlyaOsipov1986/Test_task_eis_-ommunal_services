import axios from 'axios';
import { config } from './config.ts';
import { TMetersRequest, TRequest } from '../types/meters';

export const apiService = axios.create({
  baseURL: config.api_test,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export const getListMeters = async () => {
  const responseMeters: TRequest = await apiService
    .get(`meters/`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
  return responseMeters;
};
// export const getListMeters = async (limit: number, offset: number) => {
//   return await apiService
//     .get(`meters/?limit=${limit}&offset=${offset}`)
//     .then((response) => {
//       return response.data;
//     });
// };

export const getAddress = (id: string) => {
  // return await apiService.get(`areas/?id__in=${id}`).then((response) => {
  //   return console.log(response.data);
  // });
  const responseAddress: TRequest = apiService
    .get(`addresses/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
  return responseAddress;
};

export const deleteMeter = async (meterId: string) => {
  return await apiService
    .delete(`meters/:${meterId}`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
};
