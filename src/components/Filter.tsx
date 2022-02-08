import { COLOR } from 'constants/';
import { Refresh } from 'images';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Estimate } from 'types/card';
import { Category } from 'types/category';
import { FilterInput } from './FilterInput';

interface Props {
  apiData: Estimate[];
  setCategories: Dispatch<SetStateAction<Category>>;
}

export const Filter = ({ apiData, setCategories }: Props) => {
  const methodArr = apiData.map(data => data.method).flat(Infinity);
  const materialArr = apiData.map(data => data.material).flat(Infinity);
  const methodSet = Array.from(new Set(methodArr));
  const materialSet = Array.from(new Set(materialArr));
  const [selectMethod, setSelectMethod] = useState<string[]>([]);
  const [selectMaterial, setSelectMaterial] = useState<string[]>([]);
  const [method, setMethod] = useState(false);
  const [material, setMaterial] = useState(false);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    setCategories({ method: selectMethod, material: selectMaterial });
  }, [selectMethod, selectMaterial, setCategories]);

  const onCheckMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newSelected;
    if (!e.target.checked) {
      newSelected = selectMethod.filter(method => method !== e.target.id);
      setSelectMethod(newSelected);
      return;
    }
    newSelected = [...selectMethod, e.target.id];
    setSelectMethod(newSelected);
  };
  const onCheckMaterial = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newSelected;
    if (!e.target.checked) {
      newSelected = selectMaterial.filter(mat => mat !== e.target.id);
      setSelectMaterial(newSelected);
      return;
    }
    newSelected = [...selectMaterial, e.target.id];
    setSelectMaterial(newSelected);
  };
  const onMethod = () => {
    setMethod(!method);
  };
  const onMaterial = () => {
    setMaterial(!material);
  };
  const onReset = () => {
    setClear(true);
    setSelectMethod([]);
    setSelectMaterial([]);
  };

  return (
    <FilterBox>
      <FilterUl>
        <Select
          className={selectMethod.length > 0 ? 'active' : ''}
          onClick={onMethod}
        >
          가공방식{selectMethod.length > 0 && `(${selectMethod.length})`}
        </Select>
        {method && (
          <ListUl>
            {methodSet.map((data, i) => (
              <FilterInput
                key={`method-${i}`}
                onCheck={onCheckMethod}
                data={data}
                clear={clear}
                setClear={setClear}
              />
            ))}
          </ListUl>
        )}
      </FilterUl>
      <FilterUl>
        <Select
          className={selectMaterial.length > 0 ? 'active' : ''}
          onClick={onMaterial}
        >
          재료{selectMaterial.length > 0 && `(${selectMaterial.length})`}
        </Select>
        {material && (
          <ListUl>
            {materialSet.map((data, i) => (
              <FilterInput
                key={`material-${i}`}
                onCheck={onCheckMaterial}
                data={data}
                clear={clear}
                setClear={setClear}
              />
            ))}
          </ListUl>
        )}
      </FilterUl>
      {(selectMethod.length > 0 || selectMaterial.length > 0) && (
        <FilterReset onClick={onReset}>
          <img src={Refresh} alt="refreshIcon" />
          필터링 리셋
        </FilterReset>
      )}
    </FilterBox>
  );
};

const FilterBox = styled.ul`
  display: flex;
`;

const FilterUl = styled.ul`
  width: 105px;
  height: 32px;
  position: relative;
  border: 1px solid ${COLOR.GRAY};
  border-radius: 4px;
  box-sizing: border-box;
  line-height: 23px;
  padding: 4px 12px;
  cursor: pointer;
  &:first-child {
    margin-right: 1rem;
  }
  & > li {
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 15px;
  }
  & > li::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    width: 0px;
    height: 0px;
    border-top: 4px solid ${COLOR.GRAY};
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
  &:hover {
    border: 1px solid ${COLOR.BLUE_LIGHT};
  }
`;
const Select = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
const ListUl = styled.ul`
  position: absolute;
  top: 32px;
  left: 0;
  padding: 8px 5px;
  border: 1px solid ${COLOR.GRAY};
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  z-index: 100;
`;

const FilterReset = styled.li`
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
