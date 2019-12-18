import React from "react";
import css from "./CompanyCard.module.scss";

interface ICompanyProps {
  title: string;
  subtitle: string;
  location: string;
  logo: string;
  positions: string;
  color?: string;
}

const CompanyCard = ({
  title,
  subtitle,
  location,
  logo,
  positions,
  color
}: ICompanyProps) => {
  return (
    <div className={css.card}>
      <div className={css.cardBody}>
        <div className={css.img} style={{
          backgroundImage: `url(${logo})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }} />
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={css.cardFooter} style={{ backgroundColor: color }}>
        <span>{location}</span>
        <p> {positions} Available positions</p>
      </div>
    </div>
  );
};

export default CompanyCard;
