import React from 'react';
import CarouselContainer from '../../containers/Carousel';
import RecentlyViewedContainer from '../../containers/RecentlyViewed';
import * as Styled from './styles';

const Main: React.FC = () => {
  return (
    <Styled.Main>
      <CarouselContainer />
      <RecentlyViewedContainer />
    </Styled.Main>
  );
};

export default Main;