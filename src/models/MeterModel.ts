import { t, flow } from 'mobx-state-tree';
import { getAddress, getListMeters } from '../utils/api';

const Area = t.model('Area', {
  id: t.string,
});

const House = t.model('House', {
  address: t.string,
  id: t.string,
  fias_addrobjs: t.array(t.string),
});

const Address = t.model('Address', {
  id: t.string,
  number: t.number,
  str_number: t.string,
  str_number_full: t.string,
  house: t.maybe(House),
});

const Meter = t.model('Meter', {
  id: t.string,
  _type: t.array(t.string),
  installation_date: t.string,
  is_automatic: t.maybeNull(t.boolean),
  communication: t.string,
  serial_number: t.string,
  brand_name: t.maybeNull(t.string),
  model_name: t.maybeNull(t.string),
  initial_values: t.array(t.number),
  area: t.maybe(Area),
  description: t.string,
  address: t.maybe(Address),
});

export const MeterData = t
  .model('MeterData', {
    resultsMeters: t.maybe(t.array(Meter)),
    resultsAddress: t.maybe(t.array(Address)),
  })
  .actions((self) => ({
    loadMeters: flow(function* () {
      try {
        self.resultsMeters = yield getListMeters(20, 20);
        const areas = self?.resultsMeters?.map((el) => el?.area?.id);
        const uniqAreas = new Set(areas);
        const responseAddresses: [] = [];
        for (const el of uniqAreas) {
          try {
            let idArea: string | undefined = el;
            // @ts-ignore
            const address = yield getAddress(idArea);
            // @ts-ignore
            responseAddresses.push(address);
          } catch (error) {
            console.log('Failed to fetch meters', error);
          }
        }
        // @ts-ignore
        self.resultsAddress = responseAddresses;
      } catch (error) {
        console.log('Failed to fetch meters', error);
      }
    }),
  }));
