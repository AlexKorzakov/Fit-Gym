import React, { useContext, useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import { Divider } from '../components/Divider/Divider';
import { Button } from '../components/Button/Button';
import { ReactComponent as ProfileIcon } from '../resources/profile.svg';
import { Adv } from '../components/Adv/Adv';
import { Context } from '../index';
import jwtDecode from 'jwt-decode';
import { getOne, changePassword } from '../http/userAPI';
import { ADMIN_ROUTE, CONTACTS_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';

import './styles/Profile.css';

const Profile = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const auth = user._isAuth;
  const [User, setUser] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [passwordMode, setPasswordMode] = useState(false);

  const logOut = async () => {
    user.setIsAuth(false);
    user.setUser(false);
    localStorage.clear();
  };

  const token = jwtDecode(localStorage.getItem('token'));
  const Email = token.email;

  useEffect(() => {
    getOne(Email).then((data) => setUser(data));

    if (token.role === 'ADMIN') {
      navigate(ADMIN_ROUTE);
    }
    if (auth === false) {
      return navigate(CONTACTS_ROUTE);
    }
  }, []);

  const formatDate = (date) => {
    let datePart = date.match(/\d+/g),
      year = datePart[0],
      month = datePart[1],
      day = datePart[2];
    return day + '-' + month + '-' + year;
  };

  const changeOldPassword = async () => {
    await changePassword(Email, newPassword).then((res) =>
      setPasswordMode(res)
    );
    setNewPassword('');
  };

  return (
    <>
      <Layout>
        <div className="profile">
          <Divider />
          <div className="profile_wrapper">
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile_exit_info"
            >
              <span>вы вошли как клиент</span>
              <button className="profile_exit_btn" onClick={logOut}>
                Выход
              </button>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile_information"
            >
              <ProfileIcon className="logo" />
              <div className="profile_info">
                <span>ФИО: {User.name}</span>
                <span>Дата рождения: {User.date && formatDate(User.date)}</span>
                <span>номер абонемента: {User.id}</span>
                <span>
                  ТИП абонемента: {User.type ? User.type : 'отсутствует'}
                </span>
                <span>
                  осталось занятий: {User.remained ? User.remained : 0}
                </span>
                <span>
                  Персональный тренер:
                  {User.trainer ? User.trainer : 'Не назначен'}
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile_actions"
            >
              <Button
                onClick={() => {
                  setDisplay(!display);
                }}
                color="black"
              >
                Смена пароля
              </Button>
              <a href="/faq">
                <Button color="black">Справочник</Button>
              </a>
            </motion.div>
            {display ? (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.65 }}
                className="form_password"
              >
                <label className="label_password">Новый пароль</label>
                <input
                  className="input_password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div>
                  {passwordMode && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {passwordMode}
                    </motion.span>
                  )}
                </div>

                <button className="btn_password" onClick={changeOldPassword}>
                  Сменить пароль
                </button>
              </motion.div>
            ) : null}
          </div>
          <Adv />
        </div>
      </Layout>
    </>
  );
});

export default Profile;
