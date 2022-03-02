import { useEffect, useMemo, useState } from 'react';
import { Estimate, Category } from 'types';
import { COLOR, DEVICE } from 'constants/';
import { EstimateList, FilterList, Toggle } from 'components';
import styled from 'styled-components';
import { filterData } from 'utils/filterData';

export const MainPage = () => {
  const [apiData, setApiData] = useState<Estimate[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [categories, setCategories] = useState<Category>({
    method: [],
    material: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/requests');
      setApiData(await data.json());
    };
    fetchData();
  }, []);

  const filteredList = useMemo(() => {
    return filterData(apiData, categories);
  }, [apiData, categories]);

  return (
    <PageContainer>
      <MainHeader>
        <h2>들어온 요청</h2>
        <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
      </MainHeader>
      <OptionContainer>
        <FilterList
          apiData={apiData}
          categories={categories}
          setCategories={setCategories}
        />
        <Toggle isChecked={isChecked} setIsChecked={setIsChecked} />
      </OptionContainer>
      <EstimateList list={filteredList} isChecked={isChecked} />
    </PageContainer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  @media ${DEVICE.SMALL} {
    flex-direction: column;
    align-items: flex-start;
    & > div:first-child {
      margin-bottom: 30px;
    }
  }
`;

const PageContainer = styled.main`
  max-width: 1130px;
  margin: 0 auto;
  padding: 40px 15px;
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
