import Vue from 'vue';
import Vuex from 'vuex';
import createCarsStore from './cars.store';

Vue.use(Vuex);

describe('CarsStore', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store(createCarsStore({ carsServices }));
  });
  describe('actions', () => {
    it('fetchCars - должен вызвать получение данных через сервис авто', async () => {
      const spy = jest.spyOn(carsServices, 'getCars');
      await store.dispatch('fetchCars');
      expect(spy).toBeCalled();
    });

    it('sendCar - должен добавить авто в список', async () => {
      const car = {
        id: 3,
        title: '1.4 MT Ambiente 85 л.с. МКПП',
        description: 'Description',
        year: '2000',
        price: 1230000,
        color: 'blue',
        status: 'pednding',
      };
      await store.dispatch('sendCar', car);
      expect(store.state.cars).toContain(car);
    });
  });
});

const carsServices = {
  getCars() {
    jest.fn();
  },
};

const responceMock = [
  {
    id: 1,
    title: '1.6 MT Ambiente 85 л.с. МКПП',
    description: 'Some Description',
    year: '1998',
    price: 1230000,
    color: 'red',
    status: 'pednding',
  },
  {
    id: 2,
    title: '1.8 MT Ambiente 85 л.с. АКПП',
    description: 'Another Some Description',
    year: '2008',
    price: 1900000,
    color: 'green',
    status: 'in_stock',
  },
];
