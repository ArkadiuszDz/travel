import React, { useEffect } from 'react';
import { TripInfo } from '../../apiResponseTypes';
import Card from '../Card';
import getCookie from '../../utils/getCookie';
import * as Styled from './styles';

interface Props {
  recently_viewed: TripInfo[];
  getRecentlyViewed: (cookie: string) => void
}

const RecentlyViewed: React.FC<Props> = ({ getRecentlyViewed, recently_viewed }) => {
  console.log(recently_viewed);

  useEffect(() => {
    const cookie = getCookie('recently_viewed');
    getRecentlyViewed(cookie);

  }, []);

  return (
    <Styled.RecentlyViewed>
    {recently_viewed.length > 0 && <h2 className="title">Recently viewed trips</h2>}
    <Styled.Row data-cy="recently-viewed">
      {
        recently_viewed && recently_viewed.map((data: TripInfo) => {
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
    </Styled.Row>
  </Styled.RecentlyViewed>
  );
};

export default RecentlyViewed;