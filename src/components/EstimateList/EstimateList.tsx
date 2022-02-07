import styled from 'styled-components';
import { Estimate } from 'types/card';
import { EstimateItem } from './';
import { COLOR } from 'constants/';

interface EstimateProps {
  apiData: Estimate[];
  isChecked: boolean;
}

export const EstimateList = ({ apiData, isChecked }: EstimateProps) => {
  return (
    <EstimateListContainer>
      {!apiData.length && (
        <NoEstimate>조건에 맞는 견적 요청이 없습니다.</NoEstimate>
      )}
      {apiData.map(item => (
        <EstimateItem item={item} key={item.id} isChecked={isChecked} />
      ))}
    </EstimateListContainer>
  );
};

const EstimateListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin-top: 30px;
  position: relative;
`;

const NoEstimate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #c2c2c2;
  color: ${COLOR.GRAY};
`;
