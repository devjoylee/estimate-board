import { COLOR } from 'constants/';
import React from 'react';
import styled from 'styled-components';
import { Estimate } from 'types/card';
import { Set } from 'typescript';

interface Props {
  apiData: Estimate[];
}

export const Filter = ({ apiData }: Props) => {
  const methodArr = apiData.map(data => data.method).flat(Infinity);
  const materialArr = apiData.map(data => data.material).flat(Infinity);
  const methodSet = Array.from(new Set(methodArr));
  const materialSet = Array.from(new Set(materialArr));
  return (
    <FilterBox>
      <FilterUl>
        <li>가공방식</li>
        <ListUl>
          {methodSet.map(method => (
            <li>{method}</li>
          ))}
        </ListUl>
      </FilterUl>
      <FilterUl>
        <li>재료</li>
        <ListUl>
          {materialSet.map(material => (
            <li>{material}</li>
          ))}
        </ListUl>
      </FilterUl>
    </FilterBox>
  );
};

const FilterBox = styled.ul`
  display: flex;
`;

const FilterUl = styled.ul`
  position: relative;
  border: 1px solid ${COLOR.GRAY};
  border-radius: 4px;
  box-sizing: border-box;
  /* width: 98px; */
  height: 32px;
  line-height: 23px;
  padding: 4px 12px;
  cursor: pointer;
  &:first-child {
    margin-right: 1rem;
  }
  & > li {
    font-size: 12px;
    margin-right: 2rem;
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

const ListUl = styled.ul`
  position: absolute;
  display: none;
  border: 1px solid dodgerblue;
  width: 100%;
`;
