import { Estimate } from 'types/card';
import { Category } from 'types/category';

export const getFilter = (apiData: Estimate[], categories: Category) => {
  const newData = [];
  for (let i = 0; i < apiData.length; i++) {
    const methodFiltered = apiData[i].method.filter((data: string) =>
      categories.method.includes(data)
    );
    const materialFiltered = apiData[i].material.filter((data: string) =>
      categories.material.includes(data)
    );
    if (
      methodFiltered.length >= categories.method.length &&
      materialFiltered.length >= categories.material.length
    ) {
      newData.push(apiData[i]);
    }
  }
  return newData;
};
