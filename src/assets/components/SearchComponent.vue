<template>
    <div class="container">
        <form @submit.prevent="searchCharacters">
            <select name="categoryOp" v-model="store.category">
                <option selected value="">All</option>
                <option :value="category" v-for="(category, index) in categoryOption" :key="index">{{ category }}
                </option>
            </select>
            <button type="submit">Search</button>
        </form>
    </div>
</template>

<script>
import { store } from '../../store';
export default {
    name: "SearchComponent",
    data() {
        return {
            store,
            categoryOption: [
                "Breaking Bad",
                "Better Call Saul"
            ]
        }
    },
    methods: {
        searchCharacters() {
            this.$emit('filterchar');
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container {
    height: 50px;
    margin-top: 2rem;
    background-color: $dark-grey !important;

    select {
        border-radius: 5px;
        padding: 5px 10px;
    }

    button {
        border: none;
        border-radius: 5px;
        background-color: white;
        padding: 5px 10px;
        margin-left: 1rem;
    }
}
</style>