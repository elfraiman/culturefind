import React from 'react';
// import { animated, useSpring } from 'react-spring';
import css from './company-page.module.scss';
import { Lock } from 'styled-icons/material'

const CompanyPage = () => {
  return (
    <div className={css.companyPage}>
      <div className={css.header} />
      <div className={css.picWrapper}>
        <img
          src="../static/laughing-women.jpg"
          className={css.companyPicture}
        />
      </div>
      <div className={css.contentGrid}>
        <div className={css.about}>
          <h3> About us </h3>
          <p>
            Our story started back in 1999 when we opened a online book store.
            Nowadays our customers always find what they are looking for. We
            offer an infinite choice in price, deliver options and variety of
            products. Our story hasn't finished yet; we continue to grow and
            shape the landscape of online retail.
          </p>
        </div>
        <div className={css.mediaLinks}>
          www.test.com
          <Lock />
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
