import { $host, $authHost } from './index';

export const makeAppeale = async (name, description, phone) => {
  try {
    const { data } = await $host.post('api/appeale/make', {
      name,
      description,
      phone,
    });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const getAppeals = async () => {
  try {
    const { data } = await $authHost.get('api/appeale/get');
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const deleteAppeale = async (id) => {
  try {
    const { data } = await $authHost.post('api/appeale/delete', { id });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};
