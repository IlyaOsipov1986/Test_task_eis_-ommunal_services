import { Instance, t } from 'mobx-state-tree';
import { MeterData } from './MeterModel.ts';

export const RootStore = t
  .model('RootStore', {
    meters: MeterData,
  })
  .views((self) => ({
    get showMeters() {
      if (self.meters.resultsMeters && self.meters.resultsMeters.length > 0) {
        const meters = self.meters.resultsMeters?.map((el) => el);
        const addresses = self?.meters?.resultsAddress?.map((el) => el);
        return meters.map((meter) => {
          const findAddress = addresses?.find(address => address.id === meter.area.id);
          if(findAddress) {
            return {...meter, address: findAddress};
          }
        })
      }
      return [];
    },
  }))
  .actions((self) => ({
    afterCreate() {
      self.meters.loadMeters();
    },
  }));

export type RootStoreType = Instance<typeof RootStore>;

let rootStore: RootStoreType;
export function useStore() {
  if (!rootStore) {
    rootStore = RootStore.create({
      meters: {
        resultsMeters: [],
      },
    });
  }

  return rootStore;
}
