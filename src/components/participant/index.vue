<template>
    <div class="team-participant-wrapper">
        <div class="d-flex">
            <div class="team-participant-image-wrapper">
                <img :src="src" alt="">
            </div>
            <div class="team-participant-textbox-wrapper">
                <h3 class="team-participant-name">
                    {{name}}
                </h3>
                <h4 class="team-participant-title">
                    {{title}}
                </h4>
                <div class="team-participant-text">
                    <p>
                        {{text}}
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            src: String,
            name: String,
            title: String,
            text: String
        }
    }
</script>

<style scoped lang="scss">
    @import "style.scss";

</style>
