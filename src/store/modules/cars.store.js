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
 * Моудль стора для работы с машинами
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
      carsList: ({ cars }) => cars,
    },

    actions: {
      async fetchCars({ commit }) {
        const carList = await carsServices.getCars();
        commit('changeCars', carList);
      },

      sendCar({ commit }, payload) {
        payload ? commit('addCars', payload) : console.log('No data to add');
      },
    },

    mutations: {
      changeCars(state, payload) {
        state.cars = payload;
      },

      addCars(state, payload) {
        state.cars.push(payload);
      },

      removeCarFromList(state, payload) {
        const itemIndex = state.cars.indexOf(payload);
        state.cars.splice(itemIndex, 1);
      },
    },
  };
}
