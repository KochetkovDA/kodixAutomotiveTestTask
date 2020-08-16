/**
 * @typedef {object} Car
 * @property {string} color
 * @property {string} description
 * @property {number} id
 * @property {number} price
 * @property {string} status
 * @property {string} title
 * @property {number} year
 */

/**
 * Моудль стора
 * @param {{services: object}} - зависимости в виде объекта
 * @returns {object} модуль стора
 */
export default function createCarsStore({ carsServices }) {
  return {
    namespaced: true,

    state: {
      /**
       * Список автомобилей
       * @type {Car[]}
       */
      cars: [],
    },

    getters: {
      carsList: ({ cars }) => {
        return cars;
      },
    },

    actions: {
      async fetchCars({ commit }) {
        const carList = await carsServices.getCars();
        commit('changeCars', carList);
      },
    },

    mutations: {
      changeCars(state, payload) {
        state.cars = payload;
      },
    },
  };
}
