import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: [];
  clear: boolean;
  setClear: Dispatch<SetStateAction<boolean>>;
}

export const FilterInput = ({ onCheck, data, clear, setClear }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    if (clear === true) {
      setIsChecked(false);
    }
  }, [clear]);

  const handleClick = () => {
    setClear(false);
    setIsChecked(!isChecked);
  };

  return (
    <List>
      <input
        onChange={e => onCheck(e)}
        type="checkbox"
        id={`${data}`}
        checked={isChecked}
        onClick={handleClick}
      />
      <label htmlFor={`${data}`}>{data}</label>
    </List>
  );
};

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
