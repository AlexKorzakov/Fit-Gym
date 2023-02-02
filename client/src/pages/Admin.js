import React, { useContext, useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import { Button } from '../components/Button/Button';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { ReactComponent as ProfileIcon } from '../resources/profile.svg';
import jwtDecode from 'jwt-decode';
import { Context } from '../index';
import './styles/Admin.css';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactComponent as RemoveIcon } from '../resources/remove.svg';
import { ReactComponent as PhoneIcon } from '../resources/phone.svg';
import { ReactComponent as PersonIcon } from '../resources/person.svg';
import { ReactComponent as DescriptionIcon } from '../resources/description.svg';
import {
  checkAdmin,
  extendVisit,
  offVisit,
  getPersonalTrainer,
  deleteUser,
  changeName,
  changeDayOfBirthday,
  changeType,
  getAll,
  getOne,
} from '../http/userAPI';
import { makeRecord, getSchedule, deleteRecord } from '../http/scheduleAPI';
import { deleteAppeale, getAppeals } from '../http/appealeAPI';

const days = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

const times = [
  '8:00',
  '10:00',
  '12:00',
  '14:00',
  '16:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
];

const types = ['Начальный', 'Базовый', 'Продвинутый', 'Максимальный'];

const empty = [];

const Admin = () => {
  const [click, setClick] = useState(false);
  const [scDay, setScDay] = useState('Выберите день');
  const [scTime, setScTime] = useState('Выберите время начала');
  const [scPlace, setScPlace] = useState('');
  const [scTrainer, setScTrainer] = useState('');
  const [scEndTime, setScEndTime] = useState('Выберите время окончания');
  const [schedule, setSchedule] = useState([]);
  const [changeSchedule, setChangeSchedule] = useState();
  const [data, setData] = useState('');
  const [dataType, setDataType] = useState(false);
  const [appeals, setAppeals] = useState('');
  const [clickAppeale, setClickAppeale] = useState(false);
  const [changeAppeale, setChangeAppeale] = useState(false);
  const [visit, setVisit] = useState(false);
  const { user } = useContext(Context);
  const token = jwtDecode(localStorage.getItem('token'));
  const navigate = useNavigate();
  useEffect(() => {
    checkAdmin().then((data) => {});
  }, []);

  useEffect(() => {
    getSchedule()
      .then((res) => res.days.sort((prev, next) => prev.id - next.id))
      .then((res) => setSchedule(res));
    getAppeals().then((res) => setAppeals(res));
  }, []);

  useEffect(() => {
    getSchedule()
      .then((res) => res.days.sort((prev, next) => prev.id - next.id))
      .then((res) => setSchedule(res));
  }, [changeSchedule]);

  useEffect(() => {
    getAppeals().then((res) => setAppeals(res));
  }, [changeAppeale]);

  const logOut = async () => {
    user.setIsAuth(false);
    user.setUser(false);
    localStorage.clear();
  };

  const handleSchedule = () => {
    setClick(!click);
  };

  const [inputName, setInputName] = useState('');
  const [clientList, setClientList] = useState('');
  const [clientName, setClientName] = useState('');
  const [User, setUser] = useState('');
  const [push, setPush] = useState('');

  useEffect(() => {
    if (inputName) {
      getAll(inputName).then((data) => {
        setClientList(data);
      });
    }
    if (inputName === '') {
      setClientList('');
    }
  }, [inputName]);

  useEffect(() => {
    if (clientName !== '') {
      getOne(clientName)
        .then((data) => {
          setUser(data);
        })
        .then(setPush(''));
      setInputName('');
    }
  }, [clientName]);

  useEffect(() => {
    if (clientName !== '') {
      getOne(clientName).then((data) => {
        setUser(data);
      });
    }
  }, [push]);

  const [newRemained, setNewRemained] = useState('');
  const [newTrainer, setNewTrainer] = useState('');
  const [newName, setNewName] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newType, setNewType] = useState('');
  const [confirm, setConfirm] = useState(false);

  const validate = () => {
    let startTime = Number(scTime.split(':')[0] + scTime.split(':')[1]);
    let endTime = Number(scEndTime.split(':')[0] + scEndTime.split(':')[1]);
    if (endTime <= startTime) {
      setDataType(true);
      setData('Время окончания не может быть раньше или равно времени начала');
    } else if (
      scDay == '' ||
      scTime == '' ||
      scEndTime == '' ||
      scTrainer == '' ||
      scPlace == ''
    ) {
      setDataType(true);
      setData('Не все поля заполнены');
    } else if (
      scDay !== '' &&
      scTime !== '' &&
      scEndTime !== '' &&
      scTrainer !== '' &&
      scPlace !== '' &&
      endTime > startTime
    ) {
      setDataType(false);
      setData('');
      return true;
    }
  };

  const eVisit = async () => {
    if (User.id > 1 && newRemained !== '') {
      await extendVisit(User.id, newRemained).then((res) => {
        setPush(res);
      });
    }
  };

  const oVisit = async () => {
    if (User.id > 1 && !visit) {
      if (User.remained > 0) {
        await offVisit(User.id, User.remained).then((res) => {
          setPush(res);
          setVisit(true);
        });
      } else {
        setPush('У клиента отсутствуют оплаченные посещения');
      }
    }
  };

  const gTrainer = async () => {
    if (User.id > 1 && newTrainer !== '') {
      await getPersonalTrainer(User.id, newTrainer).then((res) => {
        setPush(res);
      });
    }
  };

  const dUser = async () => {
    if (confirm) {
      if (User.id > 1) {
        await deleteUser(User.id).then((res) => {
          setPush(res);
          setConfirm(!confirm);
        });
      }
    } else {
      setPush('Подтвердите удаление повторным нажатием на кнопку');
      setConfirm(!confirm);
    }
  };

  const cName = async () => {
    if (User.id > 1 && newName !== '') {
      await changeName(User.id, newName.toUpperCase()).then((res) => {
        setPush(res);
      });
    }
  };

  const cDOB = async () => {
    if (User.id > 1 && newDate !== '') {
      await changeDayOfBirthday(User.id, newDate).then((res) => {
        setPush(res);
      });
    }
  };

  const cType = async () => {
    if (User.id > 1 && newType !== '') {
      await changeType(User.id, newType).then((res) => {
        setPush(res);
      });
    }
  };

  const cSchedule = async () => {
    if (validate()) {
      await makeRecord(scDay, scTime, scPlace, scTrainer, scEndTime).then(
        (res) => setChangeSchedule(!changeSchedule)
      );
    }
  };

  const dSchedule = async (id) => {
    await deleteRecord(id).then((res) => setChangeSchedule(!changeSchedule));
  };

  const dAppeale = async (id) => {
    await deleteAppeale(id).then((res) => setChangeAppeale(!changeAppeale));
  };

  const formatDate = (date) => {
    let datePart = date.match(/\d+/g),
      year = datePart[0],
      month = datePart[1],
      day = datePart[2];
    return day + '-' + month + '-' + year;
  };

  const handleDay = (item) => {
    setScDay(item);
  };

  const handleScTime = (item) => {
    setScTime(item);
  };

  const handleEndTime = (item) => {
    setScEndTime(item);
  };

  const handleType = (item) => {
    setNewType(item);
  };

  const handleValidateLetters = (item, callback) => {
    const validateValue = item.replace(/[^а-яА-Я ]+/g, '');
    callback(validateValue);
  };

  const handleValidateNumbers = (item, callback) => {
    const validateValue = item.replace(/[^0-9]/g, '');
    callback(validateValue);
  };

  const handleDate = (date) => {
    setNewDate(date.substring(0, 4) + date.substring(4, 10));
  };

  const handleClient = (e, email) => {
    e.preventDefault();
    setClientName(email);
  };

  const handleAppeales = () => {
    setClickAppeale(!clickAppeale);
  };

  const ScheduleView = () => {
    return (
      <>
        {schedule &&
          schedule.map((item, id) => {
            return (
              <div className="day_item" key={id}>
                <span className="day_span">{item.name}</span>
                {item.times.map((item, i) => {
                  return (
                    <div className="day_item_training" key={i}>
                      <div className="item_info">
                        <span>Время начала: {item.time}</span>
                        <span>Время окончания: {item.schedule.timeEnd}</span>
                        <span>Место тренировки: {item.schedule.place}</span>
                        <span>Тренер: {item.schedule.trainer}</span>
                      </div>
                      <RemoveIcon
                        className="remove_icon"
                        onClick={() => dSchedule(item.schedule.id)}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
      </>
    );
  };

  const AppealsView = (arr) => {
    return (
      <motion.div className="appeals_div">
        {arr.arr &&
          arr.arr.map((item) => {
            return <Appeale key={item.id} item={item} />;
          })}
      </motion.div>
    );
  };

  const Appeale = (item) => {
    const [click, setClick] = useState(false);
    let description = item.item.description.substring(0, 225);
    return (
      <div key={item.item.id} className="appeale">
        <div className="appeale_item">
          <div>
            <span className="appeale_number">Обращение № {item.item.id}</span>
          </div>
          <div className="appeale_row_item">
            <PersonIcon className="appeale_icon" />
            <span className="appeale_description">{item.item.name}</span>
          </div>
          <div className="appeale_row_item">
            <PhoneIcon className="appeale_icon" />
            <span className="appeale_description">{item.item.phone}</span>
          </div>
          <div className="appeale_row_item">
            <DescriptionIcon className="appeale_icon" />
            <p className="appeale_description">
              {click ? item.item.description : `${description}... `}
              {item.item.description.length > 225 ? (
                <span
                  className="appeale_more"
                  onClick={(e) => setClick(!click)}
                >
                  {!click ? 'развернуть' : 'свернуть'}
                </span>
              ) : null}
            </p>
          </div>
        </div>
        <RemoveIcon
          className="remove_icon appeale_remove_icon"
          onClick={() => dAppeale(item.item.id)}
        />
      </div>
    );
  };

  const Data = () => {
    return (
      <div transition={{ duration: 1 }} className="data">
        <div className="data_error">
          <span>Ошибка: </span>
        </div>
        <span className="span_invalid_data">{data && data}</span>
      </div>
    );
  };

  return (
    <Layout>
      <div className="adminpanel">
        <div className="admin_wrapper">
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="admin_login_block"
          >
            <span>вы вошли как администратор</span>
            <button onClick={logOut}>Выход</button>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="admin_working_block"
          >
            <h3>Работа с расписанием</h3>
            <Button color="black" onClick={handleSchedule}>
              Редактирование расписания
            </Button>
            {click ? (
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="schedule_edit"
              >
                <ScheduleView />
                <div className="schedule_add">
                  {dataType && data !== '' ? <Data /> : null}
                  <div className="form_item">
                    <label className="schedule_label">День проведения</label>
                    <Dropdown
                      className="schedule_dropdown"
                      value={scDay}
                      arr={days}
                      func={handleDay}
                    />
                  </div>
                  <div className="form_item">
                    <label className="schedule_label">Время начала</label>
                    <Dropdown value={scTime} arr={times} func={handleScTime} />
                  </div>
                  <div className="form_item">
                    <label className="schedule_label">Время окончания</label>
                    <Dropdown
                      value={scEndTime}
                      arr={times}
                      func={handleEndTime}
                    />
                  </div>
                  <div className="form_item">
                    <input
                      className="form_input"
                      value={scPlace}
                      onChange={(e) =>
                        handleValidateLetters(e.target.value, setScPlace)
                      }
                    />
                    <label className="schedule_label">Тип тренировки</label>
                  </div>
                  <div className="form_item">
                    <input
                      className="form_input"
                      value={scTrainer}
                      onChange={(e) =>
                        handleValidateLetters(e.target.value, setScTrainer)
                      }
                    />
                    <label className="schedule_label">Тренер</label>
                  </div>
                  <Button onClick={cSchedule} color="black">
                    Добавить тренировку
                  </Button>
                </div>
              </motion.div>
            ) : null}
            <h3>
              Работа с обращениями (активных: {appeals && appeals.length})
            </h3>
            <Button color="black" onClick={handleAppeales}>
              Просмотр всех обращений
            </Button>
            {appeals.length > 0 && !clickAppeale ? (
              <Appeale item={appeals[0]} />
            ) : null}
            {appeals.length > 0 && clickAppeale ? (
              <AppealsView arr={appeals} />
            ) : null}

            <div className="drop_down_menu">
              <div id="myDropdown" className="dropdown_content">
                <input
                  type="text"
                  placeholder="Поиск по клиентам..."
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value.toUpperCase())}
                  className="find_input"
                />
                <div className="results">
                  {clientList &&
                    clientList.map((user) => {
                      return (
                        <a
                          href="#"
                          onClick={(e) => handleClient(e, user.email)}
                          key={user.id}
                        >
                          {user.name !== 'ADMIN' && (
                            <span>
                              {user.name} (абонемент № {user.id})
                            </span>
                          )}
                        </a>
                      );
                    })}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="show"
          >
            <div className="admin_profile_information">
              <ProfileIcon className="logo" />
              <div className="admin_profile_info">
                <span>ФИО: {User.name}</span>
                <span>Дата рождения: {User.date && formatDate(User.date)}</span>
                <span>номер абонемента: {User.id}</span>
                <span>ТИП абонемента: {User.type && `"${User.type}"`}</span>
                <span>осталось занятий: {User.remained}</span>
                <span>Персональный тренер: {User.trainer}</span>
                {push && <span className="push">{push && push}</span>}
              </div>
            </div>
            <div className="admin_profile_actions">
              <div className="admin_first_row">
                <div className="action_item">
                  <Button onClick={eVisit} color="black">
                    Обновить занятия
                  </Button>
                  <div className="form_item">
                    <input
                      className="form_input"
                      value={newRemained}
                      onChange={(e) =>
                        handleValidateNumbers(e.target.value, setNewRemained)
                      }
                    />
                    <label className="schedule_label">Обновление занятий</label>
                  </div>
                </div>
                <div className="action_item">
                  <Button onClick={oVisit} color="black">
                    Списать посещение
                  </Button>
                  <div className="action_item_second_row">
                    <span>Процедура выполняется по клику</span>
                  </div>
                </div>
                <div className="action_item">
                  <Button onClick={gTrainer} color="black">
                    Назначить тренера
                  </Button>
                  <div className="form_item">
                    <input
                      className="form_input"
                      value={newTrainer}
                      onChange={(e) =>
                        handleValidateLetters(e.target.value, setNewTrainer)
                      }
                    />
                    <label className="schedule_label">Назначение тренера</label>
                  </div>
                </div>
                <div className="action_item">
                  <Button onClick={dUser} color="black">
                    Удалить карточку
                  </Button>
                  <div className="action_item_second_row">
                    <span>Процедура выполняется по клику</span>
                  </div>
                </div>
              </div>

              <div className="admin_second_row">
                <span>Внести изменения</span>
                <div className="admin_second_row_buttons">
                  <div className="action_item">
                    <Button onClick={cName} color="black">
                      ФИО
                    </Button>
                    <div className="form_item">
                      <input
                        className="form_input"
                        value={newName}
                        onChange={(e) =>
                          handleValidateLetters(e.target.value, setNewName)
                        }
                      />
                      <label className="schedule_label">ФИО</label>
                    </div>
                  </div>
                  <div className="action_item">
                    <Button onClick={cDOB} color="black">
                      Дата рождения
                    </Button>
                    <div className="form_item">
                      <input
                        className="form_input"
                        autoComplete="on"
                        type="date"
                        max="1900-01-01"
                        placeholder=""
                        value={newDate}
                        onChange={(e) => handleDate(e.target.value)}
                      />
                      <label className="schedule_label">Дата рождения</label>
                    </div>
                  </div>
                  <div className="action_item">
                    <Button onClick={cType} color="black">
                      Тип абонемента
                    </Button>
                    <div className="form_item">
                      <label className="schedule_label">Тип абонемента</label>
                      {User ? (
                        <Dropdown
                          value={newType}
                          arr={types}
                          func={handleType}
                        />
                      ) : (
                        <Dropdown
                          value={newType}
                          arr={empty}
                          func={handleType}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
