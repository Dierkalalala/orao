<template>
    <main>
        <section class="orao-banner">
            <div class="container">
                <h1 class="main-title">
                    technology
                </h1>
                <h2 class="main-subtitle">
                    ORAO relies on the implementation of a number of technologies
                    to improve on earlier Oracle platforms.
                </h2>
            </div>
        </section>

        <section class="blockchain-limitations bg-black-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="text-center">
                            <img src="../../assets/main-page/saf.png" alt="">
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="default-text-box">
                            <h2 class="inner-title">Machine Learning</h2>
                            <div class="default-text-wrap">
                                <p>
                                    Our software incorporates a neural net which uses machine learning to grade data
                                    providers in real time, and to guard against even high-reputation providers
                                    providing stale or malicious data.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="safety section-default-background-image">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="default-text-box">
                            <h2 class="inner-title">Data Protocols</h2>
                            <div class="default-text-wrap">
                                <p>
                                    One of the main advantages of ORAO is the ability to support a much wider variety of
                                    data formats than earlier Oracles. By creating Data Protocols, we force data
                                    normalization into useful formats, and also create categories outside of Finance.
                                    With ORAO, data providers can offer feeds and other data products for everything
                                    from local weather data to the outcome of football matches.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="text-center">
                            <img src="../../assets/main-page/saf.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="read-applications bg-black-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="text-center">
                            <img src="../../assets/main-page/pol.png" alt="">
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="default-text-box">
                            <h2 class="inner-title">polkadot</h2>
                            <div class="default-text-wrap">
                                <p>
                                    Polkadot presents a revolutionary opportunity in Blockchain Interoperability, and we
                                    are building <b>ORAO</b>  to take maximum advantage of this. We will be using funds raised
                                    to secure our own Parachain, allowing <b>ORAO</b>  to connect seamlessly with just about any
                                    blockchain out there for which there is demand. Chains we will support from day one
                                    include Ethereum, EOS, Tron and others, and more will be added whenever there is
                                    demand, for example if a new project gains popularity. Operating a Polkadot
                                    Parachain affords us high speed interoperability and maximum scalability. It will
                                    thus be possible to for example pay for data on Ethereum and choose to have it
                                    delivered to a smart contract on the EOS blockchain.

                                    For more information, or to see an expanded explanation for each of the above, see
                                    our whitepaper.

                                </p>
                            </div>
                            <div class="d-flex flex-column">
                                <a href="#" class="button-wrapper">
                                    <Button title="Whitepaper"></Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import Button from '../../components/Button'

    export default {
        name: "Technology",
        components: {
            Button
        }
    }
</script>

<style scoped>

</style>
