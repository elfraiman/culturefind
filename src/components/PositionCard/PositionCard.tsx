import React from 'react';
import css from './PositionCard.module.scss';

interface IPositionCardProps {
  title: string;
  location: string;
  positionLength: string;
}

const PositionCard = ({
  title,
  location,
  positionLength
}: IPositionCardProps) => {
  return (
    <div>
      <div className={css.card}>
        <h3>{title}</h3>
        <h5>{location}</h5>
        <h5>{positionLength}</h5>
        <button className={`mdc-button ${css.button}`}>Apply</button>
      </div>
    </div>
  );
};

export default PositionCard;
