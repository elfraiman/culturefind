import React from 'react';
import { animated, useSpring } from 'react-spring';
import CompanyCard from '../components/company-card/company-card';
import Header from '../components/header/header';
import css from './index.module.scss';

const Index = () => {
  // Should make a global animations file with animations we want
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  const trailInLeft = useSpring({
    opacity: 1,
    marginLeft: 0,
    transform: 'translate3d(0,0px,0)',
    from: {
      marginLeft: -2000,
      opacity: 0,
      transform: 'translate3d(0,-400px,0)'
    }
  });

  const renderCompanyCards = () => {
    const times = 15;
    const arrayOfCard = [];

    for (let i = 0; i < times; i++) {
      arrayOfCard.push(
        <animated.div style={trailInLeft}>
          <CompanyCard
            logo="../static/company-logos/springtree-logo.png"
            title="Springtree"
            subtitle={`Solving puzzles as a profession, who doesn't want that?`}
            location="Almere, The Netherlands"
            positions="3"
          />
          ,
        </animated.div>
      );
    }
    return arrayOfCard;
  };

  return (
    <div>
      <Header />
      <div className={css.heading}>
        <animated.div style={fadeIn}>
          <div className={css.heroImage} />
        </animated.div>

        <div className={css.heroTitle}>
          <span className={css.culture}>Culture</span> <span>matters</span>
          <br />
        </div>
        <span className={css.subTitle}>
          Find the company you'll really click with.
        </span>

        <div className={css.valuePickerCard} />

        <div className={css.body}>
          <div className={css.companyCards}>{renderCompanyCards()}</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
