import { useState } from 'react';
import { ReactComponent as Menu } from './menu-open.svg';
import { ReactComponent as Logo } from '../../resources/logo.svg';
import { useContext } from 'react';
import { Context } from '../../index';

import './Nav.css';

export const Nav = () => {
  const [click, setClick] = useState(false);
  const { user } = useContext(Context);
  const auth = user._isAuth;

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="/">
              <Logo />
            </a>
          </div>
          <ul className={click ? 'ul active' : 'ul'}>
            <li className="nav-item">
              <a href="/tickets">Абонементы</a>
            </li>
            <li>
              <a href="/services">Услуги</a>
            </li>
            <li className="nav-item">
              <a href="/schedule">Расписание</a>
            </li>
            <li className="nav-item">
              <a href="/contacts">Контакты</a>
            </li>
            <li>
              <a href={auth === true ? '/profile' : '/login'}>Личный кабинет</a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <Menu /> : <Menu />}
          </div>
        </div>
      </nav>
    </>
  );
};
