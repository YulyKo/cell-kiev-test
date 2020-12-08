const getText = (state) => state.message.text;
const getDescription = (state) => state.message.description;
const getIsLogged = (state) => state.message.isLogin;

export default {
  getText,
  getDescription,
  getIsLogged,
};
