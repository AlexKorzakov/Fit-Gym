import './styles/Schedule.css';
import React, { useEffect, useState, useCallback } from 'react';
import Layout from '../layouts/Layout';
import { Head } from '../components/Head/Head';
import { Divider } from '../components/Divider/Divider';
import { getSchedule } from '../http/scheduleAPI';
import { motion } from 'framer-motion';

const Schedule = () => {
  const [schedule, setSchedule] = useState();
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 1200;

  const handleWindowSize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize);
    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, [handleWindowSize]);

  useEffect(() => {
    getSchedule()
      .then((res) => res.days.sort((prev, next) => prev.id - next.id))
      .then((res) => setSchedule(res));
  }, []);

  return (
    <Layout>
      <Head title="Расписание тренеров Fit Gym">
        Часто стимулом к занятиям фитнесом являются рекомендации докторов. Эта
        мотивация особенно сильна у людей, <br />
        столкнувшихся с определенными проблемами из-за лишнего веса или
        недостатка двигательной активности. <br />
        Такая фитнес-мотивация для мужчин и женщин одинаково сильна.
      </Head>
      <div className="schedule_wrapper">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="schedule"
        >
          <div className="schedule_time">
            <div className="schedule_time_item"></div>
            <div className="schedule_time_item">
              <span>8:00</span>
            </div>
            <div className="schedule_time_item">
              <span>10:00</span>
            </div>
            <div className="schedule_time_item">
              <span>12:00</span>
            </div>
            <div className="schedule_time_item">
              <span>14:00</span>
            </div>
            <div className="schedule_time_item">
              <span>16:00</span>
            </div>
            <div className="schedule_time_item">
              <span>18:00</span>
            </div>
            <div className="schedule_time_item">
              <span>19:00</span>
            </div>
            <div className="schedule_time_item">
              <span>20:00</span>
            </div>
          </div>
          {schedule &&
            schedule.map((item, i) => {
              const obj = { id: 0, time: '' };
              let arr = new Array(8);
              arr.fill(obj);
              item.times.map((res) => {
                arr[res.id - 1] = res;
              });
              return (
                <div key={i} className="row_training">
                  <div className="row_training_day">{item.name}</div>
                  {arr.map((item, i) => {
                    if (item.id !== 0) {
                      if (!isMobile) {
                        console.log(item);
                        return (
                          <div
                            key={i}
                            className="row_training_item item_active"
                          >
                            <span className="item_place">
                              {item.schedule.place}
                            </span>
                            <span>
                              {item.time}-{item.schedule.timeEnd}
                            </span>
                            <span>{item.schedule.trainer}</span>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={i}
                            className="row_training_item item_active"
                          >
                            <span>
                              Время проведения: {item.time}-
                              {item.schedule.timeEnd}
                            </span>
                            <span>Место тренировки: {item.schedule.place}</span>
                            <span>Тренер: {item.schedule.trainer}</span>
                          </div>
                        );
                      }
                    } else {
                      if (!isMobile)
                        return (
                          <div key={i} className="row_training_item"></div>
                        );
                    }
                  })}
                </div>
              );
            })}
        </motion.div>
        <Divider />
      </div>
    </Layout>
  );
};

export default Schedule;
