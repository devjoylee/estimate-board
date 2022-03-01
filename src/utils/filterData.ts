import { Estimate, Category } from 'types';

export const filterData = (apiData: Estimate[], categories: Category) => {
  const filtered = apiData.filter((item: Estimate) => {
    const materials = categories.material.every((option: string) =>
      item.material.includes(option)
    );
    const methods = categories.method.every((option: string) =>
      item.method.includes(option)
    );
    return materials && methods;
  });
  return filtered;
};
