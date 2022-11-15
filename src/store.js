import { reactive } from "vue";

export const store = reactive({
    apiURL: 'https://breakingbadapi.com/api/',
    characterList: [],
    loading: false,
    category: '',
})