import React from "react";
import css from "./CompanyCard.module.scss";
import Link from 'next/link'

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
        <img src={logo} />
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <Link href="/company-page">
        <div className={css.cardFooter} style={{backgroundColor: color}}>
          <span>{location}</span>
          <p> {positions} Available positions</p>
        </div>
      </Link>
    </div>
  );
};

export default CompanyCard;
