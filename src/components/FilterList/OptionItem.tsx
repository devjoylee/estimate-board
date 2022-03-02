import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface OptionItemProps {
  item: string;
  clear: boolean;
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setClear: Dispatch<SetStateAction<boolean>>;
}

export const OptionItem = ({
  item,
  clear,
  handleChecked,
  setClear,
}: OptionItemProps) => {
  const checkedRef = useRef(false);
  const handleClick = () => {
    setClear(false);
    checkedRef.current = !checkedRef.current;
  };

  useEffect(() => {
    if (clear) {
      checkedRef.current = false;
    }
  }, [clear]);

  return (
    <OptionItemContainer>
      <input
        type="checkbox"
        id={item}
        onClick={handleClick}
        onChange={handleChecked}
        checked={checkedRef.current}
      />
      <label htmlFor={item}>{item}</label>
    </OptionItemContainer>
  );
};

const OptionItemContainer = styled.li`
  display: flex;
  margin: 5px 0;
  label {
    flex: 1;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.2;
  }
`;
