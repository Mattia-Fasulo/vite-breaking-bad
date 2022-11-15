<template>
    <main>
        <SearchComponent @filterchar="getCharacters" />
        <div class="container">

            <div class="counter">
                <h3>Found {{ store.characterList.length }} Characters</h3>
            </div>

            <div class="my-row">

                <CardComponent :obj="item" v-for="(item) in store.characterList" :key="item.id" />


            </div>

        </div>
    </main>
</template>

<script>
import axios from 'axios';
import CardComponent from './CardComponent.vue';
import SearchComponent from './SearchComponent.vue';
import { store } from '../../store';
export default {
    name: "AppMain",
    components: {
        CardComponent,
        SearchComponent,
    },
    data() {
        return {
            store,


        }

    }, methods: {


        findDeleteCharacter(text) {
            const index = store.characterList.findIndex(object => {
                return object.name === text;
            });
            store.characterList.splice(index, 1);
            // console.log(index)
        },

        getCharacters() {
            console.log('ciao')
            store.loading = true
            const apiurl = (store.category) ? store.apiURL + '?category=' + store.category : store.apiURL;
            axios.get(apiurl).then(
                (res) => {

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
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

main {


    .container {
        height: 100%;
        background-color: white;
        padding: 2.5rem;

        .counter {
            padding: 1rem;
            background-color: $text-color;
            vertical-align: middle;


            h3 {
                font-size: 1rem;
                margin-bottom: 0;
            }
        }
    }

    .my-row {
        display: flex;
        margin: 0 auto;
        padding: 1rem;
        width: 100%;
        gap: 25px;
        flex-wrap: wrap;



        .my-card {
            background-color: $dark-grey;
            width: calc((100% - 100px) / 5);
            height: 400px;

            .my-card-img {
                padding: 15px;
                width: 100%;

                img {
                    width: 100%;
                    height: 230px;
                }
            }

            .my-card-text {
                padding: 15px;
                text-align: center;

                h3 {
                    text-transform: uppercase;
                    font-size: 1rem;
                }

                p {
                    margin-bottom: 0px;
                }

                p,
                span {
                    color: grey;
                }
            }
        }

    }

    @media screen and (max-width: 990px) {
        .my-card {
            width: calc((100% - 100px) / 4) !important;
        }
    }

    // .row {
    //     padding: 1rem;

    //     .col {
    //         width: calc(100% / 5);
    //     }
    // }


}
</style>