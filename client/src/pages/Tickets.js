import React from 'react';
import Layout from '../layouts/Layout';
import { Head } from '../components/Head/Head';
import { Square } from '../components/Square/Square';
import { Button } from '../components/Button/Button';
import ticketStart1 from '../resources/ticketStart1.png';
import ticketStart2 from '../resources/ticketStart2.png';
import ticketStart3 from '../resources/ticketStart3.png';
import ticketStart4 from '../resources/ticketStart4.png';
import { motion } from 'framer-motion';

import './styles/Tickets.css';

const Tickets = (isVisible) => {
  return (
    <Layout>
      <div className="tickets">
        <Head title="Абонементная система">
          Часто стимулом к занятиям фитнесом являются рекомендации докторов. Эта
          мотивация особенно сильна у людей, <br />
          столкнувшихся с определенными проблемами из-за лишнего веса или
          недостатка двигательной активности. <br />
          Такая фитнес-мотивация для мужчин и женщин одинаково сильна.
        </Head>
        <div className="tickets_wrapper">
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1 }}
            className="tickets_leftsideCard"
          >
            <div className="tickets_info_block">
              <div className="tickets_info_title">
                <h2>“Начальный”</h2>
              </div>
              <p>
                Идеально подходит для новичков и людей после долгого перерыва в
                занятиях спортом. В любой момент можно подойти к тренеру и
                проконсультироваться по всем вопросам.
              </p>
              <div className="tickets_features">
                <ul className="tickets_ul">
                  <div className="tickets_leftColumn">
                    <li>
                      <Square />
                      <h3>Личный шкафчик</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Парковочное место для авто</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Тренажерный зал</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Занятия два раза в неделю</h3>
                    </li>
                  </div>
                  <div className="tickets_rightColumn">
                    <li>
                      <Square />
                      <h3>Доступ к личному кабинету</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Кулер с водой</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Доступ к личному кабинету</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Сейф на рецепции</h3>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="tickets_price">
                <ul className="tickets_pricePerYear">
                  <div className="tickets_amount">
                    <li>
                      <Square color="gray" />
                      <h3>14 400 р.</h3>
                    </li>
                  </div>
                  <div className="tickets_months">
                    <li>
                      <Square color="gray" />
                      <h3>12 месяцев</h3>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="tickets_btnConsultation">
                <a href="/contacts">
                  <Button color="black">Получить консультацию</Button>
                </a>
              </div>
            </div>
            <div className="tickets_cardImage">
              <img
                className="tickets_img"
                src={ticketStart1}
                alt="ticket img"
              />
            </div>
          </motion.div>

          <div className="tickets_rightsideCard">
            <div className="tickets_cardImage">
              <img
                className="tickets_img"
                src={ticketStart2}
                alt="ticket img"
              />
            </div>
            <div className="tickets_info_block">
              <div className="tickets_info_title">
                <h2>“Базовый”</h2>
              </div>
              <p>
                Стандартный абонемент, подразумевающий трехразовое посещение.
                Подходит для людей, регулярно посещающих фитнес-центр. Включает
                в себя все из абонемента “Начальный”.
              </p>
              <div className="tickets_features">
                <ul className="tickets_ul">
                  <div className="tickets_leftColumn">
                    <li>
                      <Square />
                      <h3>Личный шкафчик</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Выдача полотенца бесплатно</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Тренажерный зал</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Посещение три раза в неделю</h3>
                    </li>
                  </div>
                  <div className="tickets_rightColumn">
                    <li>
                      <Square />
                      <h3>Доступ к личному кабинету</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Крытый бассейн</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Высокоскоростной интернет</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Рассрочка платежа</h3>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="tickets_price">
                <ul className="tickets_pricePerYear">
                  <div className="tickets_amount">
                    <li>
                      <Square color="gray" />
                      <h3>18 000 р.</h3>
                    </li>
                  </div>
                  <div className="tickets_months">
                    <li>
                      <Square color="gray" />
                      <h3>12 месяцев</h3>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="tickets_btnConsultation">
                <a href="/contacts">
                  <Button color="black">Получить консультацию</Button>
                </a>
              </div>
            </div>
          </div>

          <div className="tickets_leftsideCard">
            <div className="tickets_info_block">
              <div className="tickets_info_title">
                <h2>“Продвинутый”</h2>
              </div>
              <p>
                Подходит для людей, сильно увлекающихся спортом. Включает в себя
                все из абонемента “Базовый”, а также посещение всех зон
                фитнес-клуба.
              </p>
              <div className="tickets_features">
                <ul className="tickets_ul">
                  <div className="tickets_leftColumn">
                    <li>
                      <Square />
                      <h3>Солярий, хаммам</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Доступ к личному кабинету</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Теннисный корт</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Полотенце и халат бесплатно</h3>
                    </li>
                  </div>
                  <div className="tickets_rightColumn">
                    <li>
                      <Square />
                      <h3>Посещение три раза в неделю</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Тренажерный зал</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>5 персональных тренировок</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Личный шкафчик</h3>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="tickets_price">
                <ul className="tickets_pricePerYear">
                  <div className="tickets_amount">
                    <li>
                      <Square color="gray" />
                      <h3>27 000 р.</h3>
                    </li>
                  </div>
                  <div className="tickets_months">
                    <li>
                      <Square color="gray" />
                      <h3>12 месяцев</h3>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="tickets_btnConsultation">
                <a href="/contacts">
                  <Button color="black">Получить консультацию</Button>
                </a>
              </div>
            </div>
            <div className="tickets_cardImage">
              <img
                className="tickets_img"
                src={ticketStart3}
                alt="ticket img"
              />
            </div>
          </div>

          <div className="tickets_rightsideCard">
            <div className="tickets_cardImage">
              <img
                className="tickets_img"
                src={ticketStart4}
                alt="ticket img"
              />
            </div>
            <div className="tickets_info_block">
              <div className="tickets_info_title">
                <h2>“Максимальный”</h2>
              </div>
              <p>
                Абонемент для людей, предпочитающих занятия спортом, отдых,
                SPA-процедуры ежедневно. Включает в себя все из предыдущих
                абонементов, а также персональные предложения.
              </p>
              <div className="tickets_features">
                <ul className="tickets_ul">
                  <div className="tickets_leftColumn">
                    <li>
                      <Square />
                      <h3>Крытая парковка</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Посещение пять раз в неделю</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Заморозка карты</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Персональный шкафчик</h3>
                    </li>
                  </div>
                  <div className="tickets_rightColumn">
                    <li>
                      <Square />
                      <h3>Доступ ко всем зонам клуба</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Массаж</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Персональный тренер</h3>
                    </li>
                    <li>
                      <Square />
                      <h3>Личный шкафчик</h3>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="tickets_price">
                <ul className="tickets_pricePerYear">
                  <div className="tickets_amount">
                    <li>
                      <Square color="gray" />
                      <h3>45 000 р.</h3>
                    </li>
                  </div>
                  <div className="tickets_months">
                    <li>
                      <Square color="gray" />
                      <h3>12 месяцев</h3>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="tickets_btnConsultation">
                <a href="#" className="tickets_link">
                  <a href="/contacts">
                    <Button color="black">Получить консультацию</Button>
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tickets;
