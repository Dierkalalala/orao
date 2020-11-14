<template>
    <div id="team" class="team-page">
        <mainTitle title="team">
        </mainTitle>
        <div class="team-black-colored-row">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <participant src="/img/2.9dc70f13.png" title="founder" name="Nikola Strahija"
                                     text="Built an Alexa World Top 10, provided data to Google Search division,
                                          tackled tens of Billions of trades in the crypto markets."
                        ></participant>
                    </div>
                    <div class="col-lg-6">
                        <participant src="/img/1.694c8dbe.png" title="founder" name="Nikola Strahija"
                                     text="Built an Alexa World Top 10, provided data to Google Search division,
                                          tackled tens of Billions of trades in the crypto markets."
                        ></participant>
                    </div>
                </div>
            </div>
        </div>


        <div class="section-default-background-image">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <participant src="/img/2.9dc70f13.png" title="founder" name="Nikola Strahija"
                                     text="Built an Alexa World Top 10, provided data to Google Search division,
                                          tackled tens of Billions of trades in the crypto markets."
                        ></participant>
                    </div>
                    <div class="col-lg-6">
                        <participant src="/img/1.694c8dbe.png" title="founder" name="Nikola Strahija"
                                     text="Built an Alexa World Top 10, provided data to Google Search division,
                                          tackled tens of Billions of trades in the crypto markets."
                        ></participant>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import mainTitle from '@/components/main-title'
    import participant from '@/components/participant'

    export default {
        name: "index",
        components: {
            mainTitle,
            participant
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
</style>
