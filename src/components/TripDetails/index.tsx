import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import setCookie from '../../utils/setCookie';
import getCookie from '../../utils/getCookie';
import updateCookie from '../../utils/updateCookie';
import { TripDetailsType } from '../../apiResponseTypes';
import * as Styled from './styles';

interface Props {
  trip_details: TripDetailsType;
  get_trip_details_error: boolean;
  getTripDetails: (id: string) => void;
}

const TripDetails: React.FC<Props> = ({ trip_details, get_trip_details_error, getTripDetails }) => {
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      getTripDetails(id);
      const cookie = getCookie('recently_viewed');
      setCookie('recently_viewed', updateCookie(cookie, id), 90);
    }
  }, [id]);

  const NotFound = (
    <div>
      Could not load results. Try again.
      <Styled.BackLinkContainer>
        <Link to="/">&#8592; Go back to homepage</Link>
      </Styled.BackLinkContainer>
    </div>
  );

  const Content = (
    <Styled.TripDetails>
      <h1>
        {trip_details && trip_details.title}
      </h1>
      <p>
        {trip_details && trip_details.info}
      </p>
      <Styled.Gallery>
        {trip_details &&
          trip_details.images &&
          trip_details.images.map((img: string) => (
            <div className="img-wrapper" key={img}>
              <img src={`${process.env.REACT_APP_DB_URL}/${img}`} />
            </div>
          ))}
      </Styled.Gallery>
      <Styled.BackLinkContainer>
        <Link to="/">&#8592; Go back to homepage</Link>
      </Styled.BackLinkContainer>
    </Styled.TripDetails>
  );

  const Component = get_trip_details_error ? NotFound : Content;

  return Component;
};

export default TripDetails;