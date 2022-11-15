<template>
  <AppHeader />
  <AppMain @filterchar="getCharacters" />
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
      endPoint: 'characters',

    }
  },
  methods: {


    findDeleteCharacter(text) {
      const index = store.characterList.findIndex(object => {
        return object.name === text;
      });
      store.characterList.splice(index, 1);
      // console.log(index)
    },

    getCharacters() {

      store.loading = true
      const apiurl = (store.category) ? store.apiURL + '?category=' + category : store.apiURL + this.endPoint;
      axios.get(apiurl).then(
        (res) => {
          console.log(res.data)
          store.characterList = [...res.data];
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