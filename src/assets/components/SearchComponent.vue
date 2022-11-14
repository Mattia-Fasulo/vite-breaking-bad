<template>
    <div class="container">
        <select>
            <option value="0">Select Category</option>
            <option value="1">Prova 1</option>
            <option value="2">Prova 2</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "SearchComponent"
}
</script>

<style lang="scss" scoped>
.container {
    height: 50px;
    margin-top: 2rem;

    select {
        border-radius: 5px;
        padding: 5px 10px;
    }
}
</style>