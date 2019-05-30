import React from 'react';
import Header from '../components/header/header';
import css from './index.module.scss';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className={css.home}>

          <div className={css.heroImage}>
          </div>

          <div className={css.heroTitle}>
            <span className={css.culture}>Culture</span> <span>matters</span>
            <br/>
          </div>

          <span className={css.subTitle}>Find the company you'll really click with.</span>  
        </div>
      </div>
    );
  }
}
