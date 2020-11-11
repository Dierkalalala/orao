<template>
    <div id="app">
        <svg style="display: none">
            <symbol id="arrow-right" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3238 1.91202C9.97801 1.58161 9.97801 1.06144 10.3238 0.73103C10.6697 0.411783 11.2142 0.411783 11.56 0.73103L16.7406 5.67974C16.9011 5.83303 17 6.04587 17 6.28177C17 6.51767 16.9011 6.7305 16.7406 6.88454L11.56 11.8332C11.2142 12.1637 10.6697 12.1637 10.3238 11.8332C9.97801 11.5028 9.97801 10.9827 10.3238 10.6523L14.0331 7.12044L0.865383 7.12044C0.38323 7.12119 -2.35868e-07 6.74315 -2.56223e-07 6.28251C-2.76577e-07 5.82187 0.38323 5.45574 0.865383 5.45574L14.0323 5.45574L10.3238 1.91202Z"
                      fill="white"/>
            </symbol>
        </svg>
        <header class="header">
            <div class="container">
                <div class="m-logotype">
                    <img src="../src/assets/common/slogo.png" alt="">
                </div>
                <nav :class="{'active': isHeaderMenuOpen}" class="list-navigation">
                    <ul class="list-navigation-list d-flex align-items-center justify-content-center">
                        <li class="list-navigation-item">
                            <a href="#" class="list-navigation-item-link">
                                start
                                <span class="list-navigation-item-hover shine">
                                  start
                                </span>

                            </a>
                        </li>
                        <li class="list-navigation-item">
                            <a href="#" class="list-navigation-item-link">
                                whitepaper
                                <span class="list-navigation-item-hover shine">
                              whitepaper
                            </span>
                            </a>
                        </li>
                        <li class="list-navigation-item has-child">
                            application
                            <span class="list-navigation-item-hover shine">
                              application
                            </span>
                            <div class="list-navigation-inner inner-child">
                                <ul class="list-navigation-inner-list">
                                    <li class="list-navigation-inner-list-item"><a href="#"
                                                                                   class="list-navigation-inner-list-link">Technology</a>
                                    </li>
                                    <li class="list-navigation-inner-list-item"><a href="#"
                                                                                   class="list-navigation-inner-list-link">use
                                        cases</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="list-navigation-item has-child">

                            about orao
                            <span class="list-navigation-item-hover shine">
                              about orao
                            </span>
                            <div class="list-navigation-inner inner-child">
                                <ul class="list-navigation-inner-list">
                                    <li class="list-navigation-inner-list-item">
                                        <a href="#" class="list-navigation-inner-list-link">
                                            Team
                                        </a>
                                    </li>
                                    <li class="list-navigation-inner-list-item">
                                        <a href="#" class="list-navigation-inner-list-link">
                                            Roadmap
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="list-navigation-item">
                            <a href="#" class="list-navigation-item-link">
                                FAQ
                                <span class="list-navigation-item-hover shine">
                              FAQ
                            </span>
                            </a>
                        </li>
                        <li class="list-navigation-item">
                            <a href="#" class="list-navigation-item-link">
                                contact
                                <span class="list-navigation-item-hover shine">
                              contact
                            </span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div :class="{'active': isHeaderMenuOpen}" class="m-header-burger" @click="openMenu">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </header>
        <router-view/>
        <footer class="footer">
            <div class="container">
                <div class="footer-top">
                    <div class="row">
                        <div class="col-lg-3">
                            <h2 class="footer-title">
                                get in touch
                            </h2>
                            <div class="footer-text">
                                <p>
                                    Fill out the form and we will get back to you.
                                </p>
                                <p>
                                    Or evem simpler, shoot us a message via Skype @skypehandle
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-7 offset-lg-2">
                            <form>
                                <div class="d-flex callback-form-first-row">
                                    <label class="form-control-label mr-md-3">
                                        <input type="text" placeholder="Your name" name="name" class="form-control">
                                    </label>
                                    <label class="form-control-label">
                                        <input type="email" placeholder="Your email address" name="email" class="form-control">
                                    </label>
                                </div>
                                <label class="form-control-label">
                                    <textarea name="message" class="form-control callback-form-textarea" placeholder="Your message"></textarea>
                                </label>
                                <div class="right-sided-content">
                                    <Button title="Submit"></Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom copyright-section">
                    <div class="d-flex copyright-wrapper align-items-center justify-content-between">
                        <p>
                            © 2020 ORAO
                        </p>
                        <p>
                            Company, Street 123, Israel, Reg No 12345 123456
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import Button from '../src/components/Button'
    export default {
        components: {
            Button
        },
        data() {
            return {
                isHeaderMenuOpen: false,
            }
        },
        methods: {
            openMenu: function () {
                this.isHeaderMenuOpen = !this.isHeaderMenuOpen
            }
        }
    }
</script>
<style>
    @import "style/bootstrap-grid.min.css";
</style>
<style lang="scss">

    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200;400;700&display=swap');

    @import "style/common.scss";
    @import "style/media.scss";


</style>
