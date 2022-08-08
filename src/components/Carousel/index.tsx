import React, { useEffect } from 'react';
import { TripInfo } from '../../apiResponseTypes';
import Card from '../Card';
import settings from '../../utils/sliderSettings';
import Slider from 'react-slick';
import * as Styled from './styles';

interface Props {
  trips_data: TripInfo[];
  get_trips_data_error: boolean;
  getTrips: () => void;
}

const Carousel: React.FC<Props> = ({ getTrips, trips_data, get_trips_data_error }) => {

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <Styled.CarouselWrapper>
      <h1 className="title">View our trips</h1>
      {get_trips_data_error && (
        <Styled.ErrorWrapper>
          Error loading content. Try to reload the page.
        </Styled.ErrorWrapper>
      )}
      {!get_trips_data_error && (
        <Styled.Carousel data-cy="trips-carousel">
          <Slider {...settings}>
            {
              trips_data && trips_data.map((data: TripInfo) => {
                return (
                  <Card 
                    key={data.id}
                    id={data.id}
                    src={data.src}
                    title={data.title}
                    oldPrice={data.oldPrice}
                    newPrice={data.newPrice}
                    info={data.info}
                    rating={data.rating}
                  />
                );
              })
            }
          </Slider>
        </Styled.Carousel>
      )}
    </Styled.CarouselWrapper>
  );
};

export default Carousel;