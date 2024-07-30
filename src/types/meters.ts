export type TRequest = void | any;

export interface IDataMeters {
  _type: string[];
  installation_date: string;
  is_automatic: boolean;
  initial_values: string[];
  address?: IAddress;
  description: null | string;
  id: string;
  communication: null | string;
  serial_number: null | string;
  brand_name: null | string;
  model_name: null | string;
  area?: {
    id: string;
  };
}

export interface IHouse {
  address: string;
  fias_addrobjs?: string[];
  id: string;
}

export interface IAddress {
  house: IHouse;
  id: string;
  number: number;
  str_number: string;
  str_number_full: string;
}
