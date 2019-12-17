import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import CompanyCard from "../components/company-card/company-card";
import Header from "../components/header/header";
import RippleBadge from "../components/RippleBadge/RippleBadge";
import { valueFilters } from "../static/values/values";
import css from "./index.module.scss";

const Index = () => {
  // Should make a global animations file with animations we want
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  const renderCompanyCards = () => {
    const times = 15;
    const arrayOfCard = [];

    for (let i = 0; i < times; i++) {
      arrayOfCard.push(
        <animated.div style={fadeIn} key={i} className={css.card}>
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

  const generateTeamValues = () => {
    const teamValues = valueFilters.find(
      values => values.name === "team values"
    );

    const arrayOfDivs: JSX.Element[] = [];

    if (teamValues) {
      teamValues.filters.forEach(filter => {
        arrayOfDivs.push(
          <li>
            <RippleBadge text={filter.name} color="#6250ff"></RippleBadge>
          </li>
        );
      });
    }

    return arrayOfDivs;
  };

  const generatePersonalHealthValues = () => {
    const healthValues = valueFilters.find(
      values => values.name === "personal health"
    );

    const arrayOfDivs: JSX.Element[] = [];

    if (healthValues) {
      healthValues.filters.forEach(filter => {
        arrayOfDivs.push(
          <li>
            <RippleBadge text={filter.name} color="#06D6A0"></RippleBadge>
          </li>
        );
      });
    }

    return arrayOfDivs;
  };

  const generateDailyRoutinesValues = () => {
    const dailyRoutinesValues = valueFilters.find(
      values => values.name === "daily routines"
    );

    const arrayOfDivs: JSX.Element[] = [];

    if (dailyRoutinesValues) {
      dailyRoutinesValues.filters.forEach(filter => {
        arrayOfDivs.push(
          <li>
            <RippleBadge text={filter.name} color="#118AB2"></RippleBadge>
          </li>
        );
      });
    }

    return arrayOfDivs;
  };

  const generateEngineeringValues = () => {
    const engineeringValues = valueFilters.find(
      values => values.name === "engineering"
    );

    const arrayOfDivs: JSX.Element[] = [];

    if (engineeringValues) {
      engineeringValues.filters.forEach(filter => {
        arrayOfDivs.push(
          <li>
            <RippleBadge text={filter.name} color="#EF476F"></RippleBadge>
          </li>
        );
      });
    }

    return arrayOfDivs;
  };

  const generateCareerGrowthValues = () => {
    const careerGrowthValues = valueFilters.find(
      values => values.name === "career growth"
    );

    const arrayOfDivs: JSX.Element[] = [];

    if (careerGrowthValues) {
      careerGrowthValues.filters.forEach(filter => {
        arrayOfDivs.push(
          <li>
            <RippleBadge text={filter.name} color="#073B4C"></RippleBadge>
          </li>
        );
      });
    }

    return arrayOfDivs;
  };

  const generateStrategyValues = () => {
    const strategyValues = valueFilters.find(
      values => values.name === "strategy"
    );

    const arrayOfDivs: JSX.Element[] = [];

    if (strategyValues) {
      strategyValues.filters.forEach(filter => {
        arrayOfDivs.push(
          <li>
            <RippleBadge text={filter.name} color="#EF5DE1"></RippleBadge>
          </li>
        );
      });
    }

    return arrayOfDivs;
  };


  const generateCompanyPropertiesValues = () => {
    const companyPropertiesValues = valueFilters.find(
      values => values.name === "company properties"
    );

    const arrayOfDivs: JSX.Element[] = [];

    if (companyPropertiesValues) {
      companyPropertiesValues.filters.forEach(filter => {
        arrayOfDivs.push(
          <li>
            <RippleBadge text={filter.name} color='#156EDB'></RippleBadge>
          </li>
        );
      });
    }

    return arrayOfDivs;
  };

  useEffect(() => {
    // console.log(valueFilters);
  });

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
      </div>

      <div className={css.body}>
        <div className={css.innerBody}>
          <div className={css.valuePickerCard}>
            <div className={css.values}>
              <section>
                <span className={css.listTitle}>Team Values</span>
                <ul>{generateTeamValues()}</ul>
              </section>
            </div>

            <div className={css.values}>
              <section>
                <span className={css.listTitle}>Personal Health</span>
                <ul>{generatePersonalHealthValues()}</ul>
              </section>

              <section>
                <span className={css.listTitle}>Daily Routines</span>
                <ul>{generateDailyRoutinesValues()}</ul>
              </section>
            </div>
            <div className={css.values}>
            <section>
                <span className={css.listTitle}>Engineering</span>
                <ul>{generateEngineeringValues()}</ul>
              </section>

              <section>
                <span className={css.listTitle}>Career Growth</span>
                <ul>{generateCareerGrowthValues()}</ul>
              </section>
            </div>

            <div className={css.values}>
              <section>
                <span className={css.listTitle}>Strategy</span>
                <ul>{generateStrategyValues()}</ul>
              </section>

              <section>
                <span className={css.listTitle}>Company Properties</span>
                <ul>{generateCompanyPropertiesValues()}</ul>
              </section>
            </div>

          </div>
          <div className={css.companyCards}>{renderCompanyCards()}</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
