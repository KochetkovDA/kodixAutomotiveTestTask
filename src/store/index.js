import vue from 'vue';
import Vuex from 'vuex';
import carsServices from '@/services/cars';

//import store modules
import createCarsStore from './modules/cars.store';

vue.use(Vuex);

export const store = new Vuex.Store({
  namespaced: false,
  modules: {
    cars: createCarsStore({ carsServices }),
  },
});
