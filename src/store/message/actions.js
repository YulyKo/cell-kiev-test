import axios from 'axios';

const URL = 'http://localhost:3000/api/test';
const getMessage = ({ commit }) => new Promise((resolve, reject) => {
  axios.get(URL)
    .then((response) => {
      const { text, description, isLogin } = response.data;
      commit('setText', text);
      commit('setDescription', description);
      commit('setIsLogged', isLogin);
      resolve(response);
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
});

module.exports = {
  getMessage,
};
