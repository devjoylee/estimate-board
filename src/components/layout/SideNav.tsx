import { COLOR } from 'constants/';
import { BuildingBlack, ColorLogo } from 'images';
import styled from 'styled-components';

interface SideNavProps {
  isOpen: boolean;
  handleOpen: () => void;
}

interface StyleProps {
  isOpen: boolean;
}

export const SideNav = ({ isOpen, handleOpen }: SideNavProps) => {
  return (
    <SideContainer onClick={handleOpen} isOpen={isOpen}>
      <SideUl onClick={e => e.stopPropagation()} isOpen={isOpen}>
        <LogoBox>
          <img src={ColorLogo} alt="colorLogo" />
        </LogoBox>
        <li>
          <img src={BuildingBlack} alt="building" />
          파트너정밀가공
        </li>
        <li>로그아웃</li>
      </SideUl>
    </SideContainer>
  );
};

const SideContainer = styled.nav<StyleProps>`
  position: fixed;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease-in-out;
`;

const SideUl = styled.ul<StyleProps>`
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 80vw;
  height: 100%;
  transition: all 0.3s ease-in;
  background-color: #fff;
  cursor: default;
  li {
    padding: 12px 32px;
    font-size: 14px;
    font-weight: 500;
  }
  & li:nth-child(2) {
    img {
      width: 15px;
      height: 15px;
      margin-right: 8px;
    }
  }
`;

const LogoBox = styled.li`
  width: 100%;
  padding: 16px 20px;
  margin-bottom: 36px;
  border-bottom: 1px solid ${COLOR.BORDER};
  img {
    height: 12px;
  }
`;
