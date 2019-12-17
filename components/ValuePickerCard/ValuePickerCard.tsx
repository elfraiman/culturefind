import React from "react";
import css from './ValuePickerCard.module.scss';
import RippleBadge from "../RippleBadge/RippleBadge";
import { valueFilters } from "../../static/values/values";


export const ValuePickerCard = () => {

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

  return (
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
  );
};
