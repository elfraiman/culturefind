import React from 'react';
import css from './company-card.scss';

interface ICompanyProps {
  title: string;
  subtitle: string;
  location: string;
  logo: string;
}

function CompanyCard( { title, subtitle, location, logo }: ICompanyProps) {
  return (
    <div className={css.card}>
      <img src={logo} />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{location}</p>
    </div>
  );
}

export default CompanyCard;
