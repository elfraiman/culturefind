import React, { useEffect, useState } from 'react';
import css from './CompanyPage.module.scss';
import Header from 'src/components/header/header';
import headerImgGuysLaughing from '../../assets/guys-laughing.jpg';
import PositionCard from 'src/components/PositionCard/PositionCard';
import { useParams } from 'react-router-dom';
import '../../firestore';
import 'firebase/firestore';
import firebase from 'firebase';
import { ICompanyData } from 'src/components/CompanyCard/CompanyCard';

const CompanyPage = () => {
  const [companyData, setCompanyData] = useState({} as ICompanyData);

  let { company } = useParams();
  const db = firebase.firestore();

  const fetchCompanyData = async () => {
    // Fetch company by their name coming from the navigation params
    //
    await db
      .collection('companies')
      .where('title', '==', `${company}`)
      .get()
      .then((companyValue: any) => {
        companyValue.forEach((companyDoc: any) => {
          setCompanyData(companyDoc.data());
        });
      });
  };


  useEffect(() => {
    fetchCompanyData();
    // eslint-disable-next-line
  }, []);

  console.log(company, 'company use params');

  return (
    <>
      <Header inverseColor={true} />
      <div className={css.wrapper}>
        <div
          className={css.header}
          style={{ backgroundColor: companyData.color }}
        >
          <span className={css.title}>{companyData.title}</span>
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
