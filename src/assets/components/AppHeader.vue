<template>
    <header>
        <div class="logo">
            <img src="/images/Breaking_Bad_logo.svg" alt="logo">
            <h1>Breaking Bad Api</h1>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader"
}
</script>


<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

header {
    height: 100px
}

.logo {
    @include center('horizontal');
    padding: 1rem;

    img {
        width: 70px;
        margin-right: 10px;
    }
}
</style>