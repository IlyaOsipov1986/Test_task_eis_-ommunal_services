export type TRequest = void | any;

export interface IDataMeters {
  index: number;
  _type: string[];
  installation_date: string;
  is_automatic: boolean;
  initial_values: string[];
  address: string;
  description: string;
  id: string;
  communication: string;
  serial_number: string;
  brand_name: null | string;
  model_name: null | string;
  area: {
    id: string;
  };
}
