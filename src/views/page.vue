<script>
import { mapActions, mapGetters } from 'vuex';

import headerBar from '@/components/header';
import footerBar from '@/components/footer';
import carsTable from '@/components/table';
import addCarForm from '@/components/addCarForm';
export default {
  name: 'Page',
  components: { headerBar, footerBar, carsTable, addCarForm },
  computed: {
    ...mapGetters('cars', ['carsList']),
  },
  created() {
    this.fetchCars();
  },

  methods: {
    ...mapActions('cars', ['fetchCars', 'sendCar']),
  },
};
</script>

<template>
  <div>
    <header-bar></header-bar>
    <div class="content-wrapper">
      <addCarForm :send-car="sendCar"></addCarForm>
      <carsTable :rows-data="carsList"></carsTable>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  padding: 104px 10px 5px 10px;
  margin: 0 auto;
  max-width: 958px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
}
</style>
