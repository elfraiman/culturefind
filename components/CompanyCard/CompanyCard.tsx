import React from 'react';
import css from './CompanyCard.module.scss';

interface ICompanyProps {
  title: string;
  subtitle: string;
  location: string;
  logo: string;
  positions: string;
}

const CompanyCard = ( { title, subtitle, location, logo, positions }: ICompanyProps) => {
  return (
    <div className={css.card}>

      <div className={css.cardBody}>
      <img src={logo} />
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={css.cardFooter}>
        <span>{location}</span>
        <p> {positions} Available positions</p>
      </div>
    </div>
  );
}

export default CompanyCard;
