import styled from 'styled-components';

export const TripDetails = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 1600px;
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 30px;

  .img-wrapper {
    margin: 0 auto;
    width: 90%;
    max-width: 500px;
    overflow: hidden;

    img {
      width: 100%;
    }

    @media (min-width: 720px) {
      width: calc(33.33% - 10px);
      margin: 0 5px;
      max-width: none;
    }
  }
`;

export const BackLinkContainer = styled.div`
  margin-bottom: 30px;
  
  a {
    text-decoration: none;
    font-size: 0.85rem;
  }
`;