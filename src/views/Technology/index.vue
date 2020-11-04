<template>
    <main>
        <section class="orao-banner">
            <div class="container">
                <div class="big-logo-wrapper">
                    <img src="../../assets/common/logo.png" alt="">
                </div>
                <h2 class="orao-banner-title">
                    A Decentralized Oracle Service
                    for Custom Data Feeds
                </h2>
                <div class="orao-banner-buttons-row align-items-center justify-content-center d-flex">
                    <a href="#">
                        <Button title="Whitepaper"></Button>
                    </a>
                    <a href="#">
                        <Button title="Docs"></Button>
                    </a>
                    <a href="#">
                        <Button title="Dashboard"></Button>
                    </a>
                </div>
            </div>
        </section>

        <section class="blockchain-limitations bg-black-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="text-center">
                            <img src="../../assets/main-page/conn.png" alt="">
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="default-text-box">
                            <h2 class="inner-title">overcoming the limitations of blockchain</h2>
                            <div class="default-text-wrap">
                                <p>
                                    One of the most restrictive limitations of Blockchains is that they are self
                                    contained
                                    and isolated. From the Internet in general - and from each other. By creating our
                                    own
                                    Parachain for the Polkadot network ORAO is able to connect to virtually every
                                    blockchain
                                    out there, and provide secure data at high speeds and with maximum scalability. Our
                                    data
                                    providers can curate custom data solutions for any requirements.
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
                            <h2 class="inner-title">safety through technology</h2>
                            <div class="default-text-wrap">
                                <p>
                                    The <b>ORAO network</b> incorporates a custom built neural net that constantly
                                    monitors
                                    data feeds and is able to predict reliability of individual data providers.
                                    By analyzing data in real time and comparing feeds to past trends ORAO can identify
                                    stale or malicious data as it is pushed, protecting consumers and ensuring the
                                    highest standards are always met on our network.
                                </p>
                            </div>
                            <a href="#">
                                <Button title="Find out more about the technology"></Button>
                            </a>
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
                            <img src="../../assets/main-page/col.png" alt="">
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="default-text-box">
                            <h2 class="inner-title">real-world applications</h2>
                            <div class="default-text-wrap">
                                <p>
                                    We ware building this for the real world. Tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                                    rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                    amet.
                                </p>
                            </div>
                            <div class="d-flex flex-column buttons-column">
                                <a href="#" class="buttons-column-button">
                                    <Button title="Find out more about use cases"></Button>
                                </a>
                                <a href="#" class="buttons-column-button">
                                    <Button title="Are you a Data Buyer or Seller?"></Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="queen section-default-background-image">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="default-text-box">
                            <h2 class="inner-title">one team - one vision</h2>
                            <div class="default-text-wrap">
                                <p>
                                    Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                    sanctus est Lorem ipsum dolor sit amet. invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua.
                                </p>
                            </div>
                            <a href="#">
                                <Button title="Find out more about the technology"></Button>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="text-center">
                            <img src="../../assets/main-page/team.png" alt="">
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
                            <div class="faq-title">
                                faq
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="default-text-box">
                            <h2 class="inner-title">got Questions?</h2>

                            <a href="#">
                                <Button title="Get the answers"></Button>
                            </a>
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
