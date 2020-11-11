<template>
    <div id="roadmap" class="roadmap-page">
        <mainTitle title="roadmap">
            <div class="map-content">
                <img src="../../assets/map/map.png" class="map-content-bg-image" alt="">
                <ul class="map-content-items-wrapper">
                    <li class="map-content-item" :key="item.id" v-for="item in roadmapItems">
                        <div class="map-content-item-title">
                            {{item.title}}
                        </div>
                        <div class="map-content-item-paragraph">
                            {{item.text}}
                        </div>
                    </li>
                </ul>
            </div>
        </mainTitle>

    </div>
</template>

<script>
    import mainTitle from '@/components/main-title'
    export default {
        name: "index",
        components: {
            mainTitle
        },
        data() {
            return {
                roadmapItems: [
                    {
                        id: 0,
                        title: 'August 2020',
                        text: 'ORAO gains recognition and interest. Model simulations are conducted'
                    },
                    {
                        id: 1,
                        title: 'August 2020',
                        text: 'ORAO gains recognition and interest. Model simulations are conducted'
                    },
                    {
                        id: 2,
                        title: 'August 2020',
                        text: 'ORAO gains recognition and interest. Model simulations are conducted'
                    },
                    {
                        id: 3,
                        title: 'August 2020',
                        text: 'ORAO gains recognition and interest. Model simulations are conducted'
                    },
                    {
                        id: 4,
                        title: 'August 2020',
                        text: 'ORAO gains recognition and interest. Model simulations are conducted'
                    },
                    {
                        id: 5,
                        title: 'August 2020',
                        text: 'ORAO gains recognition and interest. Model simulations are conducted'
                    },
                    {
                        id: 6,
                        title: 'August 2020',
                        text: 'ORAO gains recognition and interest. Model simulations are conducted'
                    },
                    {
                        id: 7,
                        title: 'August 2020',
                        text: 'ORAO gains recognition and interest. Model simulations are conducted'
                    },
                    {
                        id: 8,
                        title: 'August 2020',
                        text: 'ORAO gains recognition and interest. Model simulations are conducted'
                    },
                    {
                        id: 9,
                        title: 'August 2020',
                        text: 'ORAO gains recognition and interest. Model simulations are conducted'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "style.scss";
</style>
