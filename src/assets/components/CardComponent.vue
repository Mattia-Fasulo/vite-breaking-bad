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
    width: 100%;
    height: 390px;
    margin: 30px 0;
    background-color: $dark-grey;


    .my-card-img {
        padding: 10px;
        width: 100%;


        img {
            width: 100%;
            height: 250px;
        }
    }

    .my-card-text {
        padding: 1rem;
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
</style>