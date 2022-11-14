<template>
  <AppHeader />
  <SearchComponent />
  <AppMain />
</template>

<script>
import AppHeader from './assets/components/AppHeader.vue'
import AppMain from './assets/components/AppMain.vue';
import SearchComponent from './assets/components/SearchComponent.vue';
export default {
  components: {
    AppHeader,
    AppMain,
    SearchComponent
  }
}
</script>

<style lang="scss" scoped>

</style>