import React from 'react';
import css from './CompanyPage.module.scss';
import Header from 'src/components/header/header';
import headerImgGuysLaughing from '../../assets/guys-laughing.jpg';
import PositionCard from 'src/components/PositionCard/PositionCard';

const CompanyPage = () => {
  return (
    <>
      <Header inverseColor={true} />
      <div className={css.wrapper}>
        <div className={css.header}>
          <span className={css.title}>Company Title</span>
          <div className={css.headerCard}>
            <img src={headerImgGuysLaughing} alt="header" />
          </div>
        </div>
        
        <div className={css.positionCardsSlider}>
          <PositionCard
            title={'Software Developer'}
            location={'Almere, NL'}
            positionLength={'Full time'}
          />
          <PositionCard
            title={'Graphic designer'}
            location={'Almere, NL'}
            positionLength={'Full time'}
          />
          <PositionCard
            title={'React Developer'}
            location={'Amsterdam, NL'}
            positionLength={'Full time'}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
