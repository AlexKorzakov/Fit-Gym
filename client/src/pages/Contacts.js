import React from 'react';
import Layout from '../layouts/Layout';
import ContactImage from '../resources/building.jpg';
import { Head } from '../components/Head/Head';
import { motion } from 'framer-motion';

import './styles/Contacts.css';
import { AskForm } from '../components/AskForm/AskForm';

const Contacts = () => {
  return (
    <Layout>
      <Head title="Контактная информация">
        Часто стимулом к занятиям фитнесом являются рекомендации докторов. Эта
        мотивация особенно сильна у людей, <br />
        столкнувшихся с определенными проблемами из-за лишнего веса или
        недостатка двигательной активности. <br />
        Такая фитнес-мотивация для мужчин и женщин одинаково сильна.
      </Head>
      <div className="contacts_wrapper">
        <div className="contact_block">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_info_block"
          >
            <div className="contact_title">
              <h1>Контакты</h1>
            </div>
            <div className="contact_subinfo_block">
              <div className="sub_info">
                <h2>Адрес</h2>
                <div className="contact_description">
                  <span>105523, г. Москва, Щелковское шоссе, 100, корп. 8</span>
                </div>
              </div>
              <div className="sub_info">
                <h2>Отдел продаж</h2>
                <div className="contact_description">
                  <span>+7 (499) 222-22-22</span>
                  <span className="span_gray">abonement@fitgym.ru</span>
                </div>
              </div>
              <div className="sub_info">
                <h2>Запись на тренировки</h2>
                <div className="contact_description">
                  <span>+7 (499) 222-22-23</span>
                  <span className="span_gray">training@fitgym.ru</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_image"
          >
            <img src={ContactImage} alt="Contact Img" />
          </motion.div>
        </div>
        <AskForm />
      </div>
    </Layout>
  );
};

export default Contacts;
