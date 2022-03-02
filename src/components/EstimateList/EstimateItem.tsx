import styled from 'styled-components';
import { Estimate } from 'types';
import { COLOR } from 'constants/';
import { Button } from './Button';

interface EstimateItemProps {
  item: Estimate;
  isChecked: boolean;
}

interface StyleProps {
  isChecked: boolean;
}

export const EstimateItem = ({ item, isChecked }: EstimateItemProps) => {
  const { amount, client, count, due, material, method, status, title } = item;

  return (
    <EstimateItemContainer
      className={status === '상담중' ? 'active' : 'pending'}
      isChecked={isChecked}
    >
      <ItemHeader>
        <h3>{title}</h3>
        <p>{client}</p>
        <span>{due}까지 납기</span>
        {status === '상담중' && <InProgress>상담중</InProgress>}
      </ItemHeader>
      <ItemDetail>
        <DetailValue>
          <span>도면개수</span>
          {count}개
        </DetailValue>
        <DetailValue>
          <span>총 수량</span>
          {amount}개
        </DetailValue>
        <DetailValue>
          <span>가공방식</span>
          {method.join(',')}
        </DetailValue>
        <DetailValue>
          <span>재료</span>
          {material.join(',')}
        </DetailValue>
      </ItemDetail>
      <ButtonWrapper>
        <Button name="요청 내역 보기" bgFill />
        <Button name="채팅하기" />
      </ButtonWrapper>
    </EstimateItemContainer>
  );
};

const EstimateItemContainer = styled.li<StyleProps>`
  padding: 24px 16px;
  border: 1px solid ${COLOR.BORDER};
  border-radius: 4px;

  &:hover {
    outline: 2px solid ${COLOR.BLUE_LIGHT};
  }
  &.pending {
    display: ${({ isChecked }) => (isChecked ? 'none' : 'block')};
  }
`;

const ItemHeader = styled.div`
  position: relative;
  padding-bottom: 16px;
  border-bottom: 1px solid ${COLOR.BORDER};

  h3 {
    font-size: 16px;
    margin-bottom: 12px;
  }
  p {
    font-size: 14px;
    margin-bottom: 24px;
  }
  span {
    font-size: 14px;
    font-weight: 300;
    color: ${COLOR.GRAY};
  }
`;

const InProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 24px;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  color: ${COLOR.TAG};
  border: 1px solid ${COLOR.TAG};
  border-radius: 12px;
`;

const ItemDetail = styled.div`
  padding: 30px 0;
`;

const DetailValue = styled.p`
  font-size: 14px;
  font-weight: 700;

  & + p {
    margin-top: 10px;
  }

  span {
    display: inline-block;
    width: 100px;
    font-weight: 400;
  }
`;

const ButtonWrapper = styled.div``;
