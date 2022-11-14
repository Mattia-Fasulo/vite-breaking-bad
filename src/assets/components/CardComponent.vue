<template>
    <div class="my-card">
        <div class="my-card-img">
            <img src="https://vignette.wikia.nocookie.net/breakingbad/images/a/a2/Tess_Harper.jpg/revision/latest?cb=20120923235754"
                alt="Harper">
        </div>
        <div class="my-card-text">
            <h3>Harper</h3>
            <p>Breaking Bad</p>
            <span>Alive</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent"
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.my-card {
    width: 100%;
    height: 100%;
    background-color: $dark-grey;

    .my-card-img {
        padding: 10px;
        width: 100%;

        img {
            width: 100%;
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