import styled from 'styled-components';

export const Carousel = styled.div`
  padding: 1rem;

  .slick-arrow {
    &::before {
      color: #0048ff;
    }
  }
`;

export const CarouselWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  .title {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`;
