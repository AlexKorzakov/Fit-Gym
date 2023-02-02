import { $host, $authHost } from './index';

export const getSchedule = async () => {
  const { data } = await $host.get('api/schedule/getRecord');
  return data;
};

export const makeRecord = async (day, time, place, trainer, timeEnd) => {
  const { data } = await $authHost.post('api/schedule/makeRecord', {
    day,
    time,
    place,
    trainer,
    timeEnd,
  });
  return data;
};

export const deleteRecord = async (id) => {
  const { data } = await $authHost.post('api/schedule/deleteRecord', { id });
  return data;
};
