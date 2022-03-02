import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { Estimate, Category } from 'types';
import { OptionList } from './OptionList';
import { Refresh } from 'images';
import { COLOR } from 'constants/';

interface FilterListProps {
  apiData: Estimate[];
  categories: Category;
  setCategories: Dispatch<SetStateAction<Category>>;
}

export const FilterList = ({
  apiData,
  categories,
  setCategories,
}: FilterListProps) => {
  const [clear, setClear] = useState(false);
  const handleReset = () => {
    setClear(true);
  };

  return (
    <FilterContainer>
      <OptionList
        name="가공방식"
        apiData={apiData}
        setCategories={setCategories}
        clear={clear}
        setClear={setClear}
      />
      <OptionList
        name="재료"
        apiData={apiData}
        setCategories={setCategories}
        clear={clear}
        setClear={setClear}
      />
      {(categories.method.length > 0 || categories.material.length > 0) && (
        <FilterReset onClick={handleReset}>
          <img src={Refresh} alt="refreshIcon" />
          필터링 리셋
        </FilterReset>
      )}
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
`;

const FilterReset = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${COLOR.BLUE_LIGHT};
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
    margin: 0 12px 0 24px;
  }
`;
