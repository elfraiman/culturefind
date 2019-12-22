import firebase from 'firebase';
import 'firebase/firestore';

import React, { useState, useEffect } from 'react';
import css from './HomePage.module.scss';
import '../../firestore';
import stLogo from '../../assets/company-logos/springtree-logo.png';
import { useSpring, animated } from 'react-spring';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import Header from '../../components/header/header';
import {ValuePickerCard} from '../../components/ValuePickerCard/ValuePickerCard';

const HomePage = () => {
  const [companyCards, setCompanyCards] = useState([] as any);

  const db = firebase.firestore();

  // Heading animations
  const titleProps = useSpring({ opacity: 1, marginLeft: 12, from: { opacity: 0, marginLeft: -1600 } });
  const subTitleProps = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: 1000 } });

  // Fetches and renders the company cards from the DB
  //
  const createCompanyCards = async () => {
    const list: any = [];

    await db
      .collection('companies')
      .get()
      .then(companies => {
        companies.docs.forEach((company, index) => {
          console.log(company.data());
          const companyData = company.data();
          list.push(
            <CompanyCard
              key={index}
              logo={companyData.logo ? companyData.logo : stLogo}
              title={companyData.title}
              subtitle={companyData.subtitle}
              location={companyData.location}
              positions={companyData.positions.length}
              color={companyData.color}
            />
          );
        });
      })
      .catch(error => console.log(error));

    setCompanyCards(list);
  };

  useEffect(() => {
    createCompanyCards();
  }, []);

  return (
    <div>
      <Header />
      <div className={css.heading}>
        <div className={css.heroImage} />
        
        <animated.div style={titleProps} className={css.heroTitle}>
          <span className={css.culture}>Culture</span> <span>matters</span>
          <br />
        </animated.div>

        <animated.div style={subTitleProps} className={css.subTitle}>
          Find the company you'll really click with.
        </animated.div>
      </div>

      <div className={css.body}>
        <div className={css.innerBody}>
          <ValuePickerCard />
          <div className={css.companyCards}>
            {companyCards ? companyCards : <h2>No Companies</h2>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
