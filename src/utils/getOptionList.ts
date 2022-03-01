import { Estimate } from 'types/card';

export const getOptionList = (
  apiData: Estimate[],
  option: 'method' | 'material'
) => {
  const list = apiData.map(data => data[option]).flat(1);
  return Array.from(new Set(list));
};
