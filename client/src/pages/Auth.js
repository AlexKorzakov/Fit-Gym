import React from 'react';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Head } from '../components/Head/Head';
import Layout from '../layouts/Layout';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import './styles/Auth.css';
import '../index.css';
import { LOGIN_ROUTE } from '../utils/consts';

const Auth = observer(() => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <>
      <Layout>
        <Head title="Личный кабинет">
          Часто стимулом к занятиям фитнесом являются рекомендации докторов. Эта
          мотивация особенно сильна у людей, <br />
          столкнувшихся с определенными проблемами из-за лишнего веса или
          недостатка двигательной активности. <br />
          Такая фитнес-мотивация для мужчин и женщин одинаково сильна.
        </Head>
        <div className="form_wrapper">
          {isLogin ? <AuthForm /> : <RegisterForm />}
        </div>
      </Layout>
    </>
  );
});

export default Auth;
