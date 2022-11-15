<template>
  <AppHeader />
  <AppMain :characters="characterList" />
</template>

<script>
import axios from 'axios';
import AppHeader from './assets/components/AppHeader.vue'
import AppMain from './assets/components/AppMain.vue';
import SearchComponent from './assets/components/SearchComponent.vue';
// import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain,
    SearchComponent
  },
  data() {
    return {
      //store : store
      apiURL: 'https://breakingbadapi.com/api/characters',
      characterList: [],
      loading: false
    }
  },
  methods: {


    findDeleteCharacter(text) {
      const index = this.characterList.findIndex(object => {
        return object.name === text;
      });
      this.characterList.splice(index, 1);
      // console.log(index)
    },

    getCharacters() {
      this.loading = true
      axios.get(this.apiURL).then(
        (res) => {
          this.characterList = [...res.data];
          // console.log(this.characterList)
          this.findDeleteCharacter('Lydia Rodarte-Quayle');
          this.findDeleteCharacter('Skinny Pete');
          this.findDeleteCharacter('Holly White');

        }
      )
    }
  },
  created() {
    this.getCharacters()
  },
  mounted() {

  }

}
</script>

<style lang="scss" scoped>

</style>