const getters = require('./getters');
const mutations = require('./mutations');
const actions = require('./actions');

const state = {
  text: '',
  description: '',
};

module.exports = {
  state,
  getters,
  mutations,
  actions,
};
