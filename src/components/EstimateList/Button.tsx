import styled from 'styled-components';
import { COLOR } from 'constants/';

interface ButtonProps {
  name: string;
  bgFill?: boolean;
}

interface StyleProps {
  bgFill?: boolean;
}

export const Button = ({ name, bgFill }: ButtonProps) => {
  return <ButtonElement bgFill={bgFill}>{name}</ButtonElement>;
};

const ButtonElement = styled.button<StyleProps>`
  padding: 0 12px;
  height: 32px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid ${COLOR.BLUE_LIGHT};
  color: ${({ bgFill }) => (bgFill ? '#fff' : COLOR.BLUE_LIGHT)};
  background-color: ${({ bgFill }) => (bgFill ? COLOR.BLUE_LIGHT : '#fff')};

  & + button {
    margin-left: 10px;
  }
`;
