import { Instance, t } from 'mobx-state-tree';
import { MeterModel } from './MeterModel.ts';

export const RootStore = t
  .model('RootStore', {
    meters: t.array(MeterModel),
  }).actions(store => ({

  }))


export type RootStoreType = Instance<typeof RootStore>;

let rootStore: RootStoreType;
export function useStore() {
  if (!rootStore) {
    rootStore = RootStore.create({
      meters: [],
    });
  }

  return rootStore;
}
