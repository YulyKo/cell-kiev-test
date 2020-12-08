const getters = require('./getters');
const mutations = require('./mutations');
const actions = require('./actions');

const state = {
  text: 'Hello World',
  description: 'My first',
  isLogin: false,
};

module.exports = {
  state,
  getters,
  mutations,
  actions,
};
