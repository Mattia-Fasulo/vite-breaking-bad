<template>
    <main>
        <div class="container">

            <div class="found">
                <h3>Found 62 Characters</h3>
            </div>

            <div class="row">
                <div class="col col-sm-6 col-md-4 col-lg-3">
                    <CardComponent />>
                </div>





            </div>
        </div>
    </main>
</template>

<script>
import CardComponent from './CardComponent.vue'
export default {
    name: "AppMain",
    components: {
        CardComponent
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

        .found {
            padding: 1rem;
            background-color: $text-color;
            vertical-align: middle;

            h3 {
                font-size: 1rem;
                margin-bottom: 0;
            }
        }
    }

    .row {
        padding: 1rem;

        .col {
            width: calc(100% / 5);
        }
    }


}
</style>