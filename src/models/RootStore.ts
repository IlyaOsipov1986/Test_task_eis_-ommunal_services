import { Instance, t } from 'mobx-state-tree';
import { MeterModel } from './MeterModel.ts';
import { getListMeters } from '../utils/api';

// @ts-ignore
// @ts-ignore
export const RootStore = t
  .model('RootStore', {
    meters: t.array(MeterModel),
  })
  .actions((self: any) => {
    // @ts-ignore
    return (self.meters = getListMeters(20, 10).then((res) => res.results));
  });

const testItemMeter = [
  {
    id: '1111',
    _type: ['2'],
    installation_date: '2',
    is_automatic: null,
    initial_values: [2],
    address: 'address',
    description: '',
  },
];

export type RootStoreType = Instance<typeof RootStore>;

let rootStore: RootStoreType;
export function useStore() {
  if (!rootStore) {
    rootStore = RootStore.create({
      meters: testItemMeter,
    });
  }

  return rootStore;
}
