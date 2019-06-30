import React from 'react';
import css from './header.module.scss';

function Header() {
  return (
    <div className={css.header}>
      <img
        src='/static/logo-black.png'
        className={css.logo}
        alt='culturefind logo'
      />
      <div className={css.headBtns}>
        <a>Join</a>
        <a>Blog</a>
        <a>About</a>
      </div>
    </div>
  );
}

export default Header;
