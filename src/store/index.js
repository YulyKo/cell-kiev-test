import { createStore } from 'vuex';

const message = require('./message');

export default createStore({
  modules: {
    message,
  },
});
