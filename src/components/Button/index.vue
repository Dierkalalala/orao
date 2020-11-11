<template>
    <button type="submit" class="default-button">
        {{title}}
        <svg width="17" height="13">
            <use xlink:href="#arrow-right"></use>
        </svg>
    </button>
</template>

<script>
    export default {
        name: "index",
        props: {
            title: String,
        }
    }
</script>

<style scoped>

</style>
