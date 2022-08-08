import styled from 'styled-components';

export const Card = styled.div`
  margin: 0 10px;

  a {
    text-decoration: none;
    color: #000;
  }

  .img-wrapper {
    overflow: hidden;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .text-wrapper {
    padding: 5px;
    .small-text {
      font-size: 0.75rem;
      margin-bottom: 3px;
    }
    .title-wrapper {
      margin-bottom: 10px;
    }
    .rating-value {
      font-size: 0.75rem;
    }
    .price {
      font-size: 0.8rem;
    }
  }
`;