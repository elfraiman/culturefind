import React from "react";
import css from "./header.module.scss";
import logo from '../../assets/logo-black.png';

const Header = () => {
  return (
    <div className={css.header}>
      <img
        src={logo}
        className={css.logo}
        alt="culturefind company logo"
      />

      <div className={css.headBtns}>
        <a href="/">Join</a>
        <a href="/">Blog</a>
        <a href="/">About</a>
      </div>
    </div>
  );
}

export default Header;
