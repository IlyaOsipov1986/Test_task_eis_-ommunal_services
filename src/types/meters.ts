export type TRequest =  void | any;

export interface IMeter {
  id: string,
  _type: string[],
  installation_date: string,
  is_automatic: null | boolean,
  initial_values: number[],
  area: object,
  description: string,
}

export interface IAddress {
  [key: string]: {
    id: string,
    number: number,
    str_number: string,
    str_number_full: string,
    house: {
      address: string,
      id: string,
      fias_addrobjs: string[]
    }
  }
}


