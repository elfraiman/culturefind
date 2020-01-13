import css from './header.module.scss';
import logo from '../../assets/logo-black.png';
import React from 'react';

interface IHeaderProps {
  inverseColor?: boolean;
}

const Header = ({ inverseColor }: IHeaderProps) => {
  return (
    <div className={css.header}>
      <img src={logo} className={css.logo} alt="culturefind company logo" />

      <div
        className={inverseColor ? css.whiteText : css.blackText}
      >
        <a href="/">Join</a>
        <a href="/">Blog</a>
        <a href="/">About</a>
      </div>
    </div>
  );
};

export default Header;
