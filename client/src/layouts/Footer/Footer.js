import { ReactComponent as Logo } from '../../resources/logo.svg';
import { ReactComponent as VkIcon } from '../Header/vk.svg';
import { ReactComponent as InstIcon } from '../Header/instagram.svg';
import { ReactComponent as TgIcon } from '../Header/telegram.svg';
import { useContext } from 'react';
import { Context } from '../../index';

import './Footer.css';

export const Footer = () => {
  const { user } = useContext(Context);
  const auth = user._isAuth;

  return (
    <footer className="footer">
      <div className="first_row">
        <Logo className="footer_logo" />
        <div className="footer_navigation">
          <ul className="footer_ul">
            <li className="footer_nav-item">
              <a href="/tickets">Абонементы</a>
            </li>
            <li>
              <a href="/services">Услуги</a>
            </li>
            <li className="footer_nav-item">
              <a href="/schedule">Расписание</a>
            </li>
            <li className="footer_nav-item">
              <a href="/contacts">Контакты</a>
            </li>
            <li className="footer_nav-item">
              <a href={auth === true ? '/profile' : '/login'}>Личный кабинет</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="second_row">
        <div className="footer_title">
          <span>© Fit Gym 2022, Все права защищены</span>
        </div>
        <div className="footer_icons">
          <a href="https://vk.com/">
            <VkIcon />
          </a>
          <a href="https://instagram.com/">
            <InstIcon />
          </a>
          <a href="https://telegram.org/">
            <TgIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
