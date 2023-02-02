import { Button } from '../Button/Button';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

import './AskForm.css';
import { makeAppeale } from '../../http/appealeAPI';

export const AskForm = observer(() => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [push, setPush] = useState('');
  const [success, setSuccess] = useState('');

  const validation = () => {
    if (name && phone && description) {
      return true;
    } else {
      setPush('Не все поля заполнены');
      setSuccess('');
    }
  };

  const click = async () => {
    if (validation()) {
      try {
        await makeAppeale(name, description, phone)
          .then((res) => {
            setSuccess(res);
            setPush('');
            setName('');
            setPhone('');
            setDescription('');
          })
          .catch((res) => {
            setPush(res.message);
            setSuccess('');
          });
      } catch (e) {}
    }
  };

  const handlePhone = (value) => {
    const validateValue = value.replace(/[^0-9]/g, '');
    setPhone(validateValue);
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
    <form autoComplete="on" className="form">
      <div className="container">
        <div className="info_block">
          <h2 className="info_text">Оставить обращение</h2>
        </div>
        {push && push !== '' ? <Data /> : null}
        {success && success !== '' ? (
          <div className="ask_success_block">
            <span className="ask_success">{success}</span>
          </div>
        ) : null}
        <div className="input_block">
          <div className="form_item">
            <input
              autoComplete="on"
              type="name"
              className="form_input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="form_label">Имя: *</label>
          </div>
          <div className="form_item">
            <input
              autoComplete="on"
              className="form_input"
              type="tel"
              maxLength="11"
              value={phone}
              onChange={(e) => handlePhone(e.target.value)}
              required
            />
            <label className="form_label">Контактный телефон: *</label>
          </div>
          <div className="form_item">
            <textarea
              autoComplete="on"
              className="form_input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <label className="form_label">Текст обращения: *</label>
          </div>
        </div>
        <div className="auth_confirm_block">
          <Button onClick={click}>Отправить</Button>
        </div>
      </div>
    </form>
  );
});
