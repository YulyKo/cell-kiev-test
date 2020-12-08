import axios from 'axios';

const URL = 'http://localhost:3080/api/test';
const getMessageFromAPI = ({ commit }) => new Promise((resolve, reject) => {
  axios.get(URL)
    .then((response) => {
      const message = response.data;
      commit('setMessage', message);
      resolve(response);
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
});

export default {
  getMessageFromAPI,
};
