import axios from 'axios';
import { headers } from './headers';
import { baseUrl } from '..';
import { AXIOS } from '../config/axios';

export const getAllTask = async () => {
  return await axios
    .get(`${baseUrl}/tasks`, {
      headers,
    })
    .then((response) => {
      return response.data.data;
    });
};

export const createTask = async (description) => {
  return await axios
    .post(`${baseUrl}/create`, { description }, { headers })
    .then((response) => {
      return response.data.data;
    });
};

export const updateTask = async (id, description) => {
  const desc = { description: description };
  console.log(description);
  return await axios
    .put(`${baseUrl}/task/${id}`, desc, { headers })
    .then((response) => {
      return response.data.data;
    });
};

export const deleteTask = async (id) => {
  return await axios
    .delete(`${baseUrl}/task/${id}`, {
      headers,
    })
    .then((response) => {
      return response.data;
    });
};
