import { createStore } from 'vuex';
import message from './message/index';

export default createStore({
  modules: {
    message,
  },
});
