import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Estimate } from 'types/card';
import { Category } from 'types/category';
import { OptionList } from './OptionList';

interface FilterListProps {
  apiData: Estimate[];
  setCategories: Dispatch<SetStateAction<Category>>;
}

export const FilterList = ({ apiData, setCategories }: FilterListProps) => {
  return (
    <FilterContainer>
      <OptionList name="가공방식" apiData={apiData} />
      <OptionList name="재료" apiData={apiData} />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
`;
