import { Button } from '../Button/Button';
import React, { useState, useContext, useEffect } from 'react';
import './RegisterForm.css';
import { registration, check } from '../../http/userAPI';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../utils/consts';
import { motion } from 'framer-motion';

export const RegisterForm = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [push, setPush] = useState('');

  useEffect(() => {
    if (user._isAuth === true) {
      navigate(PROFILE_ROUTE);
    }
  });

  useEffect(() => {}, [date]);

  const validation = () => {
    if (password && confirmPassword && email && date && name) {
      if (password === confirmPassword) {
        return true;
      } else {
        setPush('Пароли не совпадают');
      }
    } else {
      setPush('Не все поля заполнены');
      return false;
    }
  };

  const click = async () => {
    if (validation()) {
      try {
        await registration(name.toUpperCase(), date, email, password)
          .then(() => {
            check().then(() => {
              user.setIsAuth(true);
              user.setUser(user);
            });
          })
          .catch((res) => setPush(res.message));
      } catch (e) {
        alert(e);
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
      form
      autoComplete="on"
      className="form"
    >
      <div className="container">
        <div className="info_block">
          <h2 className="register_info_text">Регистрация пользователя</h2>
        </div>
        {push && push !== '' ? <Data /> : null}
        <div className="input_block">
          <div className="form_item">
            <input
              autoComplete="on"
              className="form_input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="form_label">ФИО: *</label>
          </div>
          <div className="form_item">
            <input
              className="form_input"
              autoComplete="on"
              type="date"
              max="1900-01-01"
              placeholder=""
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label className="form_label"></label>
          </div>
          <div className="form_item">
            <input
              autoComplete="on"
              className="form_input"
              type="email"
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
          <div className="form_item">
            <input
              autoComplete="on"
              className="form_input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label className="form_label">Подтверждение пароля: *</label>
          </div>
        </div>
        <div className="register_auth_confirm_block">
          <Button onClick={click}>Отправить</Button>
          <a href="/login">Войти в аккаунт</a>
        </div>
      </div>
    </motion.form>
  );
});
