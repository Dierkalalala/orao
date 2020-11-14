<template>
    <div id="faq" class="faq-page">
        <mainTitle title="faq">
        </mainTitle>
        <div class="team-black-colored-row">
            <div class="container">
                <div class="accordion-wrapper">
                    <div class="question">
                        What is the total supply of ORAO tokens? What about the current supply? What about price?
                    </div>
                    <div class="answer">
                        The total supply is 1,000,000,000 (1 billion) tokens. The circulating supply at the time of the
                        Token Generation Event is 126,500,000 tokens, with an estimated market cap of $1,138,500 (USD).
                        The supply will then increase gradually through community bounty campaigns, vesting times
                        running out, network incentives, etc.
                    </div>
                </div>
                <div class="accordion-wrapper open">
                    <div class="question">
                        What is the total supply of ORAO tokens? What about the current supply? What about price?
                    </div>
                    <div class="answer">
                        The total supply is 1,000,000,000 (1 billion) tokens. The circulating supply at the time of the
                        Token Generation Event is 126,500,000 tokens, with an estimated market cap of $1,138,500 (USD).
                        The supply will then increase gradually through community bounty campaigns, vesting times
                        running out, network incentives, etc.
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import mainTitle from '@/components/main-title'

    export default {
        name: "index",
        components: {
            mainTitle,
        },
    }
</script>

<style scoped lang="scss">
    @import "style.scss";
</style>
