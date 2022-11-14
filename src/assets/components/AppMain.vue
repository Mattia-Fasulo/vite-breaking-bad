<template>
    <main>
        <div class="container">

            <div class="found">
                <h3>Found 62 Characters</h3>
            </div>

            <div class="row">
                <div class="col col-sm-6 col-md-4 col-lg-3">
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
                </div>
                <div class="col col-sm-6 col-md-4 col-lg-3">
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
                </div>
                <div class="col col-sm-6 col-md-4 col-lg-3">
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
                </div>
                <div class="col col-sm-6 col-md-4 col-lg-3">
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
                </div>
                <div class="col col-sm-6 col-md-4 col-lg-3">
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
                </div>




            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "AppMain"
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
}
</style>