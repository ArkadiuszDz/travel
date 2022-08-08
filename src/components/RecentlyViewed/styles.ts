import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 720px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .card {
    margin: 0 auto;
    width: 90%;
    max-width: 500px;

    @media (min-width: 720px) {
      width: calc(33.33% - 10px);
      margin: 0 5px;
      max-width: none;
    }
  }
`;

export const RecentlyViewed = styled.div`
  width: 95%;
  margin: 0 auto 50px auto;
  max-width: 1200px;

  .title {
    font-size: 1.25rem;
    text-align: center;
  }
`;