<script>
import { mapActions, mapGetters } from 'vuex';

import headerBar from '@/components/header';
import footerBar from '@/components/footer';
export default {
  name: 'Page',
  components: { headerBar, footerBar },
  computed: {
    ...mapGetters('cars', ['carsList']),
  },
  created() {
    this.fetchCars();
  },

  methods: {
    ...mapActions('cars', ['fetchCars']),
  },
};
</script>

<template>
  <div>
    <header-bar></header-bar>
    <div class="content-wrapper">
      <ul>
        <li v-for="(car, index) in carsList" :key="`${car.id}_${index}`">
          {{ car }}
        </li>
      </ul>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  padding-top: 104px;
  width: 100%;
  overflow: auto;
}
</style>
