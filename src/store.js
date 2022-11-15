import { reactive } from "vue";

export const store = reactive({
    apiURL: 'https://breakingbadapi.com/api/characters',
    characterList: [],
    loading: false,
    category: '',
})