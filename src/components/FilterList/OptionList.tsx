import { COLOR } from 'constants/';
import styled from 'styled-components';
import { Estimate } from 'types/card';
import { getOptionList } from 'utils/getOptionList';

interface OptionListProps {
  name: string;
  apiData: Estimate[];
}

export const OptionList = ({ name, apiData }: OptionListProps) => {
  const optionName = name === '가공방식' ? 'method' : 'material';
  const optionList = getOptionList(apiData, optionName);

  return (
    <OptionListContainer>
      <SelectBox>{name}</SelectBox>
      <OptionListDrop>
        {optionList.map(item => (
          <li>{item}</li>
        ))}
      </OptionListDrop>
    </OptionListContainer>
  );
};

const OptionListContainer = styled.div`
  width: 105px;
  height: 32px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid ${COLOR.GRAY};
  padding: 4px 12px;
  position: relative;
  cursor: pointer;
  &:first-child {
    margin-right: 1rem;
  }
  &:hover {
    border: 1px solid ${COLOR.BLUE_LIGHT};
  }
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 100%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
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
  /* visibility: hidden; */
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
