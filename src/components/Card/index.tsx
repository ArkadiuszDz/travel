import React from 'react';
import * as Styled from './styles';
import { Rating } from 'react-simple-star-rating';
import { Link } from "react-router-dom";
import { TripInfo } from '../../apiResponseTypes';

const Card: React.FC<TripInfo> = ({
  id,
  title,
  oldPrice,
  newPrice,
  info,
  src,
  rating,
}) => {
  return (
    <Styled.Card className="card" data-name={title}>
      <Link to={id}>
        <div className="img-wrapper">
          <img src={`${process.env.REACT_APP_DB_URL}/${src}`} alt="image" />
        </div>
        <div className="text-wrapper">
          <div className="small-text">
            {info}
          </div>
          <div className="title-wrapper">
            <strong>{title}</strong>
          </div>
          <Rating ratingValue={rating*20} size={16} readonly/> <strong className="rating-value">{rating}</strong>
          <div className="price">
            <strong>{newPrice}</strong> {oldPrice && <s>{oldPrice}</s>}
          </div>
        </div>
      </Link>
    </Styled.Card>
  );
};

export default Card;