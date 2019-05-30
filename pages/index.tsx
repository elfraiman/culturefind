import React from 'react';
import Header from '../components/header/header';
import css from './index.module.scss';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className={css.home}>
          <div className={css.sideImage}>

          </div>
        </div>
      </div>
    );
  }
}
