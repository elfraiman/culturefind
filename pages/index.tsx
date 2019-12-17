import firebase from "firebase";
import React, { useState, useEffect } from "react";
import CompanyCard from "../components/CompanyCard/CompanyCard";
import Header from "../components/header/header";
import { ValuePickerCard } from "../components/ValuePickerCard/ValuePickerCard";
import css from "./index.module.scss";

const Index = () => {
  const [companyCards, setCompanyCards] = useState([] as any);

  const db = firebase.firestore();


  // Fetches and renders the company cards from the DB
  //
  const createCompanyCards = async ()  => {
    const list: any = [];

    await db.collection("companies")
      .get()
      .then(companies => {
        companies.docs.forEach((company, index) => {
          console.log(company.data());
          const companyData = company.data();
          list.push(
            <CompanyCard
              key={index}
              logo="../static/company-logos/springtree-logo.png"
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

      setCompanyCards(list)
  }

  useEffect(() => {
    createCompanyCards();

  }, []);

  return (
    <div>
      <Header />
      <div className={css.heading}>
        <div className={css.heroImage} />

        <div className={css.heroTitle}>
          <span className={css.culture}>Culture</span> <span>matters</span>
          <br />
        </div>

        <span className={css.subTitle}>
          Find the company you'll really click with.
        </span>
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

export default Index;
