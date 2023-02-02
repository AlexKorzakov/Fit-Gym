import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import { motion } from 'framer-motion';
import { ReactComponent as TrainersIcon } from '../resources/healthicons_gym.svg';
import { ReactComponent as RatingIcon } from '../resources/star.svg';
import './styles/Faq.css';
import { getCategory, getTrainers } from '../http/faqAPI';

const Faq = () => {
  const [menu, setMenu] = useState(null);
  const [trainers, setTrainers] = useState(null);
  const [displayId, setDisplayId] = useState(1);
  const [trainer, setTrainer] = useState();
  const [activeId, setId] = useState();
  const [info, setInfo] = useState();
  const [click, setClick] = useState(false);

  useEffect(() => {
    getCategory().then((data) => setMenu(data));
    getTrainers(displayId).then((data) => setTrainers(data));
  }, []);

  useEffect(() => {
    getTrainers(displayId).then((data) => setTrainers(data));
  }, [displayId]);

  useEffect(() => {
    getInfo();
  }, [activeId]);

  const handleMenu = (id) => {
    setDisplayId(id);
  };

  const handleTrainer = (i, id) => {
    setTrainer(i);
    setId(id);
    setClick(!click);
  };

  const handleClick = () => {
    setClick(!click);
  };

  const getInfo = () => {
    const activeTrainer = trainers ? trainers[trainer] : null;
    setInfo(activeTrainer);
  };

  const BuildFirstLevel = () => {
    return (
      <>
        <ul className={click ? 'menu_firstlevel active' : 'menu_firstlevel'}>
          {menu &&
            menu.map((item) => {
              const { category, id } = item;
              return (
                <li key={id} onClick={() => handleMenu(id)}>
                  <span className="menu_item_title">{category}</span>
                  {id === displayId ? <BuildSecondLevel /> : null}
                </li>
              );
            })}
        </ul>
        <div className="faq_nav_icon" onClick={handleClick}>
          {click ? <TrainersIcon /> : <TrainersIcon />}
        </div>
      </>
    );
  };

  const BuildSecondLevel = () => {
    return (
      <ul className="menu_secondlevel">
        {trainers &&
          trainers.map((item, i) => {
            const { name, id } = item;
            let style = id === activeId ? 'spot_active' : null;
            return (
              <li key={i} onClick={() => handleTrainer(i, id)}>
                <span className={style}>{name}</span>
              </li>
            );
          })}
      </ul>
    );
  };

  const Card = () => {
    return (
      <>
        <div className="trainer_card">
          <div className="card_first_row">
            <div className="faq_card_image">
              <img
                src={require(`../resources/${info.img}.png`)}
                alt="exercise-bike"
              />
            </div>
            <div className="card_info">
              <div className="card_info_header">
                <div className="card_info_title">{info.name}</div>
                <div className="card_info_features">
                  <div className="card_info_item">
                    <div className="rating">
                      {[...Array(info.complexity)].map((item, i) => (
                        <RatingIcon key={i} />
                      ))}
                      {[...Array(5 - info.complexity)].map((item, i) => (
                        <RatingIcon className="white_icon" key={i} />
                      ))}
                    </div>
                    <span>сложность</span>
                  </div>
                  <div className="card_info_item">
                    <span>{info.amount} ед.</span>
                    <span>количество в зале</span>
                  </div>
                  <div className="card_info_item">
                    <span>{info.mode}</span>
                    <span>тренинг</span>
                  </div>
                </div>
              </div>
              <div className="card_info_subdescription">
                <p>{info.sub_des}</p>
              </div>
              <div className="card_info_purpose">
                <div className="card_info_purpose_col_1">
                  <span>Цели</span>
                  <div
                    className="card_targets"
                    dangerouslySetInnerHTML={{ __html: info.target_num }}
                  />
                </div>
                <div className="card_info_purpose_col_2">
                  <span>Задействованы</span>
                  <div
                    className="card_targets"
                    dangerouslySetInnerHTML={{ __html: info.action_num }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card_second_row">
            <div className="card_second_row_description">
              <p>{info.description}</p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="trainer_information"
        >
          <div className="trainer_main_rules">
            <h2>Главные правила занятий</h2>
            <p>{info.rules_des}</p>
            <div className="trainer_rules_efficiency">
              <span className="efficiency">
                Эффективность зависит от параметров
              </span>
              <div
                className="efficiency_depends"
                dangerouslySetInnerHTML={{ __html: info.tech_num }}
              />
            </div>
          </div>
          <div className="trainer_tecnhique">
            <h2>Техника</h2>
            <p>{info.tech_des}</p>
          </div>
          <div className="trainer_loads">
            <h2>Нагрузки</h2>
            <p>{info.load_des}</p>
          </div>
          <div className="trainer_rules">
            <h2>Правила</h2>
            <div dangerouslySetInnerHTML={{ __html: info.rules_num }} />
          </div>
        </motion.div>
      </>
    );
  };

  return (
    <Layout>
      <div className="faq_wrapper">
        <div className="faq_sidebar">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.25 }}
            className="sidebar_title"
          >
            <TrainersIcon />
            <span>Тренажеры</span>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="sidebar_menu"
          >
            <BuildFirstLevel />
          </motion.div>
        </div>
        <div className="faq_main">
          {info ? (
            <Card />
          ) : (
            <div className="plug">
              <h2 className="choose_trainer">Выберите тренажер из списка</h2>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
