<template>
  <AppHeader />
  <SearchComponent />
  <AppMain :characters="characterList" />
</template>

<script>
import axios from 'axios';
import AppHeader from './assets/components/AppHeader.vue'
import AppMain from './assets/components/AppMain.vue';
import SearchComponent from './assets/components/SearchComponent.vue';
export default {
  components: {
    AppHeader,
    AppMain,
    SearchComponent
  },
  data() {
    return {
      apiURL: 'https://breakingbadapi.com/api/characters',
      characterList: [],
      loading: false
    }
  },
  methods: {
    getCharacters() {
      this.loading = true
      axios.get(this.apiURL).then(
        (res) => {
          this.characterList = [...res.data];
          console.log(this.characterList)

        }
      )
    }
  },
  created() {
    this.getCharacters()
  }
}
</script>

<style lang="scss" scoped>

</style>