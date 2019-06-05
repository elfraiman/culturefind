import React from 'react';
import CompanyCard from '../components/company-card/company-card';
import Header from '../components/header/header';
import css from './index.module.scss';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className={css.home}>
          <div className={css.heroImage} />

          <div className={css.heroTitle}>
            <span className={css.culture}>Culture</span> <span>matters</span>
            <br />
          </div>

          <span className={css.subTitle}>
            Find the company you'll really click with.
          </span>
        </div>

        <CompanyCard
          logo='../static/company-logos/springtree-logo.png'
          title='Springtree'
          subtitle="Solving puzzles as a profession, who doesn't want that?"
          location='Almere, The Netherlands'
          positions='3'
        />
      </div>
    );
  }
}
