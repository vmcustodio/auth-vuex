import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const estado = {
  token: null,
  usuario: {},
};

const mutations = {
  DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
    //state e payload sendo desestruturado o obj
    state.token = token;
    state.usuario = usuario;
  },
};

export default new Vuex.Store({
  state: estado,
  mutations,
});
