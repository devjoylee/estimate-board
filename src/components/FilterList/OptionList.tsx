import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Estimate, Category } from 'types';
import { getOptionList } from 'utils/getOptionList';
import { OptionItem } from './OptionItem';
import { COLOR } from 'constants/';

interface OptionListProps {
  name: string;
  apiData: Estimate[];
  clear: boolean;
  setCategories: Dispatch<SetStateAction<Category>>;
  setClear: Dispatch<SetStateAction<boolean>>;
}

export const OptionList = ({
  name,
  apiData,
  clear,
  setCategories,
  setClear,
}: OptionListProps) => {
  const optionName = name === '가공방식' ? 'method' : 'material';
  const optionList = getOptionList(apiData, optionName);
  const [select, setSelect] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newSelected;
    if (!e.target.checked) {
      newSelected = select.filter(option => option !== e.target.id);
      setSelect(newSelected);
    } else {
      newSelected = [...select, e.target.id];
      setSelect(newSelected);
    }
  };

  useEffect(() => {
    setCategories(prev => ({
      ...prev,
      [optionName]: select,
    }));
  }, [optionName, select, setCategories]);

  useEffect(() => {
    if (clear) {
      setSelect([]);
      setIsOpen(false);
    }
  }, [clear]);

  return (
    <OptionListContainer>
      <SelectBox
        onClick={() => setIsOpen(!isOpen)}
        className={select.length > 0 ? 'active' : ''}
      >
        {name}
        {select.length > 0 && `(${select.length})`}
      </SelectBox>
      <OptionListDrop className={isOpen ? 'active' : ''}>
        {optionList.map((item, i) => (
          <OptionItem
            item={item}
            key={optionName + i}
            handleChecked={handleChecked}
            clear={clear}
            setClear={setClear}
          />
        ))}
      </OptionListDrop>
    </OptionListContainer>
  );
};

const OptionListContainer = styled.div`
  width: 105px;
  height: 32px;
  position: relative;
  cursor: pointer;
  &:first-child {
    margin-right: 1rem;
  }
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 100%;
  border: 1px solid ${COLOR.GRAY};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 4px 12px;
  position: relative;

  &:hover {
    border: 1px solid ${COLOR.BLUE_LIGHT};
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 0px;
    height: 0px;
    border-top: 4px solid ${COLOR.GRAY};
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
  &.active {
    background-color: ${COLOR.BLUE};
    color: #ffffff;
  }
  &.active::after {
    border-top: 4px solid #ffffff;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
`;

const OptionListDrop = styled.ul`
  position: absolute;
  visibility: hidden;
  top: 32px;
  left: 0;
  padding: 8px 5px;
  border: 1px solid ${COLOR.GRAY};
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  z-index: 100;
  &.active {
    visibility: visible;
  }
`;
