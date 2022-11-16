<template>

    <div class="my-card">
        <div class="my-card-img">
            <img :src="obj.img" :alt="obj.name">
        </div>
        <div class="my-card-text">
            <h3>{{ obj.name }}</h3>
            <p>{{ obj.category }}</p>
            <span>{{ obj.status }}</span>
        </div>
    </div>

</template>

<script>
export default {
    name: "CardComponent",
    props: [
        "obj"
    ]
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

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

    @media screen and (max-width: 1120px) {


        .my-card {
            width: calc((100% - 80px) / 4) !important;

        }
    }

    @media screen and (max-width: 990px) {
        .my-card {
            width: calc((100% - 60px) / 3) !important;
        }
    }

    @media screen and (max-width: 770px) {

        .container {
            padding: 0;
        }

        .my-card {
            margin: 0 auto;
            width: calc((100% - 40px) / 2) !important;
        }
    }

    @media screen and (max-width: 500px) {

        .container {
            padding: 0;
        }

        .my-card {
            margin: 0 auto;
            width: calc((100% - 80px) / 1) !important;
        }
    }


}
</style>