import { $authHost } from './index';
import jwt_decode from 'jwt-decode';

export const getCategory = async () => {
  try {
    const { data } = await $authHost.get('api/category');
    return data;
  } catch (e) {}
};

export const getTrainers = async (category_id) => {
  const { data } = await $authHost.post('api/trainer', { category_id });
  return data;
};
