import { $host, $authHost } from './index';
import jwt_decode from 'jwt-decode';

// GUEST functions

export const registration = async (name, date, email, password) => {
  try {
    const { data } = await $host.post('api/user/registration', {
      name,
      date,
      email,
      password,
      role: 'USER',
    });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

// USER functions

export const login = async (email, password) => {
  try {
    const { data } = await $host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const changePassword = async (email, password) => {
  try {
    const { data } = await $authHost.put('api/user/reset', { email, password });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const check = async () => {
  const { data } = await $authHost.post('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

// ADMIN functions

export const checkAdmin = async (role) => {
  const { data } = await $authHost.get('api/user/admin', { role });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const getOne = async (email) => {
  try {
    const { data } = await $authHost.post('api/user/get', { email });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const getAll = async (name) => {
  const { data } = await $authHost.get('api/user/get/' + name);
  return data;
};

export const extendVisit = async (id, newRemained) => {
  try {
    const { data } = await $authHost.post('api/user/admin/visit', {
      id,
      newRemained,
    });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const offVisit = async (id, remained) => {
  try {
    const { data } = await $authHost.post('api/user/admin/offVisit', {
      id,
      remained,
    });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const getPersonalTrainer = async (id, newTrainer) => {
  try {
    const { data } = await $authHost.post('api/user/admin/trainer', {
      id,
      newTrainer,
    });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const deleteUser = async (id) => {
  try {
    const { data } = await $authHost.post('api/user/admin/delete', { id });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const changeName = async (id, newName) => {
  try {
    const { data } = await $authHost.post('api/user/admin/changeName', {
      id,
      newName,
    });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const changeDayOfBirthday = async (id, newDate) => {
  try {
    const { data } = await $authHost.post('api/user/admin/changeDOB', {
      id,
      newDate,
    });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const changeType = async (id, newType) => {
  try {
    const { data } = await $authHost.post('api/user/admin/changeType', {
      id,
      newType,
    });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};
