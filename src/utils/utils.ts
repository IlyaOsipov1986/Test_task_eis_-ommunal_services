import moment from 'moment';

export const formatDateFrom = (
  value: string | null | undefined,
  noTime = false
) => {
  if (!value) return '';
  return moment
    .utc(value)
    .local()
    .format(noTime ? 'll' : 'll');
};
