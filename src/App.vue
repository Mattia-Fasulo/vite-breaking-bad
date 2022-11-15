<template>
  <AppHeader />
  <AppMain />
</template>

<script>
import axios from 'axios';
import AppHeader from './assets/components/AppHeader.vue'
import AppMain from './assets/components/AppMain.vue';
import SearchComponent from './assets/components/SearchComponent.vue';
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain,
    SearchComponent
  },
  data() {
    return {
      store, //store : store

    }
  },

  mounted() {

  }

}
</script>

<style lang="scss" scoped>

</style>