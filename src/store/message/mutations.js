const setText = (state, text) => { state.text = text; };
const setDescription = (state, description) => { state.description = description; };
const setIsLogin = (state, isLogged) => { state.isLogin = isLogged; };

module.exports = {
  setText,
  setDescription,
  setIsLogin,
};
