import { t } from 'mobx-state-tree';

export const MeterModel = t.model('MeterModel', {
  id: t.string,
  _type: t.array(t.string),
  installation_date: t.string,
  is_automatic: t.null,
  initial_values: t.array(t.number),
  address: t.string,
  description: t.string,
});
