import { COLOR } from 'constants/';
import styled from 'styled-components';

interface EstimateProps {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}

export const Toggle = ({ isChecked, setIsChecked }: EstimateProps) => {
  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ToggleBox>
      <ToggleLabel>
        <ToggleInput type="checkbox" onClick={handleClick} />
        <ToggleBall />
      </ToggleLabel>
      <ToggleText>상담 중인 요청만 보기</ToggleText>
    </ToggleBox>
  );
};

const ToggleText = styled.span`
  margin-left: 15px;
`;

const ToggleBall = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background-color: ${COLOR.GRAY_LIGHT};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  ::before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    top: -2px;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    -webkit-transition: 0.5s;
    transition: 0.4s;
    border-radius: 20px;
  }
`;

const ToggleLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 15px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  :checked + ${ToggleBall} {
    background-color: ${COLOR.TAG};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  }
  :checked + ${ToggleBall}::before {
    background-color: ${COLOR.TAG_BALL};
    -webkit-transform: translateX(22px);
    -ms-transform: translateX(22px);
    transform: translateX(22px);
  }
`;

const ToggleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
