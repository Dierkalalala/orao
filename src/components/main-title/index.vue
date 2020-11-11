<template>
    <section class="orao-banner">
        <div class="container">
            <h1 class="main-title">
                {{ title }}
            </h1>
            <h2 class="main-subtitle"></h2>
            <slot></slot>
        </div>
    </section>
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
