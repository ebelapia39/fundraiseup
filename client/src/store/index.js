import Vue from "vue";
import Vuex from "vuex";
import axios from "../utils/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    presets: [40, 100, 200, 1000, 2500, 5000],
    currencies: [
      { name: "US Dollar", code: "USD", symbol: "$", rate: 1 },
      { name: "Euro", code: "EUR", symbol: "€", rate: 0.897597 },
      { name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755 },
      { name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993 },
    ],
  },
  getters: {
    getPresets(state) {
      return state.presets;
    },
    getCurrencies(state) {
      return state.currencies;
    },
  },
  mutations: {},
  actions: {
    addDonate(_, data) {
      return axios.post("/donate", data);
    },
  },
  modules: {},
});
