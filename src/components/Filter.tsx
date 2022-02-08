import { COLOR } from 'constants/';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Estimate } from 'types/card';

interface Props {
  apiData: Estimate[];
}

export const Filter = ({ apiData }: Props) => {
  const methodArr = apiData.map(data => data.method).flat(Infinity);
  const materialArr = apiData.map(data => data.material).flat(Infinity);
  const methodSet = Array.from(new Set(methodArr));
  const materialSet = Array.from(new Set(materialArr));
  const [method, setMethod] = useState(false);
  const [material, setMaterial] = useState(false);
  const [selectMethod, setSelectMethod] = useState([]);
  const [selectMaterial, setSelectMaterial] = useState([]);

  const onCheckMethod = (e: any, data: string | []) => {
    // const newSelect = selectMethod.push(data);
    console.log(data);
  };

  const onMethod = () => {
    setMethod(!method);
  };
  const onMaterial = () => {
    setMaterial(!material);
  };

  return (
    <FilterBox>
      <FilterUl>
        <Select onClick={onMethod}>가공방식</Select>
        {method && (
          <ListUl>
            {methodSet.map((data, i) => (
              <List key={`method-${i}`}>
                <input
                  onChange={e => onCheckMethod(e, data)}
                  type="checkbox"
                  id={`${data}`}
                />
                <label htmlFor={`${data}`}>{data}</label>
              </List>
            ))}
          </ListUl>
        )}
      </FilterUl>
      <FilterUl>
        <Select onClick={onMaterial}>재료</Select>
        {material && (
          <ListUl>
            {materialSet.map((material, i) => (
              <List key={`material-${i}`}>
                <input type="checkbox" id={`${material}`} />
                <label htmlFor={`${material}`}>{material}</label>
              </List>
            ))}
          </ListUl>
        )}
      </FilterUl>
    </FilterBox>
  );
};

const FilterBox = styled.ul`
  display: flex;
`;

const FilterUl = styled.ul`
  width: 98px;
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
const List = styled.li`
  display: flex;
  margin: 5px 0;
  label {
    flex: 1;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.2;
  }
`;
