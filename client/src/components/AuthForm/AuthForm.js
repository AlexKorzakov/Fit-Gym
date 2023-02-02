import { Button } from '../Button/Button';
import { observer } from 'mobx-react-lite';
import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../index';
import './AuthForm.css';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '../../utils/consts';
import { useLocation, useNavigate } from 'react-router-dom';
import { check, login } from '../../http/userAPI';
import { motion } from 'framer-motion';

export const AuthForm = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogRoute = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [push, setPush] = useState('');

  useEffect(() => {
    if (user._isAuth === true) {
      navigate(PROFILE_ROUTE);
    }
  });

  const validation = () => {
    if (password && email) {
      return true;
    } else {
      setPush('Не все поля заполнены');
    }
  };

  const click = async () => {
    if (validation()) {
      try {
        if (isLogRoute) {
          await login(email, password).catch((res) => setPush(res.message));
          check().then(() => {
            user.setIsAuth(true);
            user.setUser(true);
          });
        } else if (!isLogRoute) {
          console.log('NO NO NO');
        }
      } catch (e) {
        console.log(e);
      }
    }
    return;
  };

  const Data = () => {
    return (
      <div className="auth_data">
        <div className="auth_data_error">
          <span>Ошибка: </span>
        </div>
        <span className="auth_span_invalid_data">{push && push}</span>
      </div>
    );
  };

  return (
    <motion.form
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      autoComplete="on"
      className="form"
    >
      <div className="container">
        <div className="info_block">
          <h2 className="info_text">Авторизация</h2>
        </div>
        {push && push !== '' ? <Data /> : null}
        <div className="input_block">
          <div className="form_item">
            <input
              autoComplete="on"
              className="form_input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="form_label">E-mail: *</label>
          </div>
          <div className="form_item">
            <input
              autoComplete="on"
              className="form_input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="form_label">Пароль: *</label>
          </div>
        </div>
        <div className="auth_confirm_block">
          <Button onClick={click}>Войти</Button>
          <a href="/registration">Зарегистрироваться</a>
        </div>
      </div>
    </motion.form>
  );
});
