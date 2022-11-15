<template>
    <main>
        <SearchComponent />
        <div class="container">

            <div class="counter">
                <h3>Found 62 Characters</h3>
            </div>

            <div class="my-row">

                <CardComponent :obj="item" v-for="(item) in characters" :key="item.id" />


            </div>

        </div>
    </main>
</template>

<script>
import CardComponent from './CardComponent.vue';
import SearchComponent from './SearchComponent.vue';
export default {
    name: "AppMain",
    components: {
        CardComponent,
        SearchComponent,
    },
    props: {
        characters: Array
    }
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