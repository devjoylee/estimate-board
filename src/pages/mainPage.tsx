import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetcher } from 'utils/fetcher';
import { COLOR } from 'constants/';
import { EstimateList } from 'components/EstimateList';

export const MainPage = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    (async function fetchData() {
      const data = await fetcher();
      setApiData(data);
    })();
  }, []);

  console.log(apiData);

  return (
    <PageContainer>
      <MainHeader>
        <h2>들어온 요청</h2>
        <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
      </MainHeader>
      <EstimateList apiData={apiData} />
    </PageContainer>
  );
};

const PageContainer = styled.main`
  max-width: 1130px;
  margin: 40px auto;
  padding: 0 15px;
`;

const MainHeader = styled.div`
  padding-left: 2px;
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  span {
    font-size: 16px;
    color: ${COLOR.GRAY};
  }
`;
