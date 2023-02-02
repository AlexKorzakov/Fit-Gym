import React from 'react';
import Layout from '../layouts/Layout';
import { Head } from '../components/Head/Head';
import {
  GymData,
  SwimmingData,
  TennisData,
  HammamData,
} from '../components/Slider/SliderData';
import { Slider } from '../components/Slider/Slider';
import { motion } from 'framer-motion';

import './styles/Services.css';

const Services = () => {
  return (
    <Layout>
      <div className="services">
        <Head title="Услуги Fit Gym">
          Часто стимулом к занятиям фитнесом являются рекомендации докторов. Эта
          мотивация особенно сильна у людей, <br />
          столкнувшихся с определенными проблемами из-за лишнего веса или
          недостатка двигательной активности. <br />
          Такая фитнес-мотивация для мужчин и женщин одинаково сильна.
        </Head>
        <div className="services_wrapper">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 1 }}
            className="left_side_card"
          >
            <div className="services_info_block">
              <div className="services_info_title">
                <h2>Тренажерный зал</h2>
              </div>
              <p>
                Тренажерный зал необходим для того, чтобы поддержать здоровье.
                Мышечная нагрузка необходима нашему телу не только для того,
                чтобы мышцы не были дряблыми (хотя это суперважно). Мышечная
                нагрузка активизирует работу всех систем организма, нормализует
                обмен веществ и работу гормональной системы.
              </p>
              <div className="features">
                <div className="left_column">
                  <div className="advantage">
                    <h3>2</h3>
                    <h3>
                      больших
                      <br />
                      зала
                    </h3>
                  </div>
                  <div className="advantage">
                    <h3>11</h3>
                    <h3>
                      кардио <br />
                      тренажеров
                    </h3>
                  </div>
                </div>
                <div className="right_column">
                  <div className="advantage">
                    <h3>7</h3>
                    <h3>
                      силовых
                      <br />
                      тренажеров
                    </h3>
                  </div>
                  <div className="advantage">
                    <h3>3</h3>
                    <h3>
                      тренажера с<br />
                      собственным весом
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Slider className="slider" slides={GymData} />
          </motion.div>

          <div className="right_side_card">
            <Slider className="slider" slides={SwimmingData} />
            <div className="services_info_block">
              <div className="services_info_title">
                <h2>Бассейн</h2>
              </div>
              <p>
                Во время плавания в бассейне или на открытой воде задействуется
                много мышц, при этом реально продолжительное время поддерживать
                нагрузку с невысокой интенсивностью. А именно так запускается
                процесс расхода жира в качестве энергии.
              </p>
              <div className="features">
                <div className="left_column">
                  <div className="advantage">
                    <h3>1</h3>
                    <h3>
                      большой
                      <br />
                      бассейн
                    </h3>
                  </div>
                  <div className="advantage">
                    <h3>1</h3>
                    <h3>
                      малый с<br />
                      бассейн
                    </h3>
                  </div>
                </div>
                <div className="right_column">
                  <div className="advantage">
                    <h3>8</h3>
                    <h3>
                      коротких
                      <br />
                      дорожек
                    </h3>
                  </div>
                  <div className="advantage">
                    <h3>4</h3>
                    <h3>
                      длинных
                      <br />
                      дорожки
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="left_side_card">
            <div className="services_info_block">
              <div className="services_info_title">
                <h2>Теннисный корт</h2>
              </div>
              <p>
                Теннис является прекрасным видом спорта для поддержания
                здоровья. Исследования показали, что если человек занимается
                теннисом хотя бы 2–3 часа в неделю, то у него улучшаются
                показатели сердечно-сосудистой и иммунной системы, также данная
                нагрузка благоприятно влияет на работу дыхательной системы,
                стабилизирует кровообращение и сердечную мышцу.
              </p>
              <div className="features">
                <div className="left_column">
                  <div className="advantage">
                    <h3>1</h3>
                    <h3>
                      теннисный
                      <br />
                      корт
                    </h3>
                  </div>
                  <div className="advantage">
                    <h3>23</h3>
                    <h3>
                      метра
                      <br />
                      длина корта
                    </h3>
                  </div>
                </div>
                <div className="right_column">
                  <div className="advantage">
                    <h3>8</h3>
                    <h3>
                      метров
                      <br />
                      ширина корта
                    </h3>
                  </div>
                  <div className="advantage">
                    <h3>2</h3>
                    <h3>
                      регулируемые
                      <br />
                      сетки
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Slider className="slider" slides={TennisData} />
          </div>

          <div className="right_side_card">
            <Slider className="slider" slides={HammamData} />
            <div className="services_info_block">
              <div className="services_info_title">
                <h2>Хаммам</h2>
              </div>
              <p>
                Турецкая баня – это маленький уголок восточной культуры, в
                котором можно поднять настроение и улучшить самочувствие. Ведь в
                парной можно отдохнуть, расслабиться после трудного рабочего дня
                или тренировки в тренажерном зале, очистить кожу, вывести шлаки
                из организма и даже устроить сеанс ароматерапии.
              </p>
              <div className="features">
                <div className="left_column">
                  <div className="advantage">
                    <h3>100%</h3>
                    <h3>
                      влажность
                      <br />в хаммаме
                    </h3>
                  </div>
                  <div className="advantage">
                    <h3>55</h3>
                    <h3>
                      градусов
                      <br />
                      температура
                    </h3>
                  </div>
                </div>
                <div className="right_column">
                  <div className="advantage">
                    <h3>5</h3>
                    <h3>
                      метров
                      <br />
                      высота помещения
                    </h3>
                  </div>
                  <div className="advantage">
                    <h3>2</h3>
                    <h3>
                      часа
                      <br />
                      пребывания
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
