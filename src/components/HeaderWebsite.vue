<template>
    <!--====================  header area ====================-->
    <div class="header-area">
        <div class="header-area__desktop header-area__desktop--default">

            <!--=======  header top bar  =======-->
            <div class="header-top-bar">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                            <!-- top bar left -->
                            <div class="top-bar-left-wrapper">
                                <div class="social-links social-links--white-topbar d-inline-block">
                                    <ul>
                                        <li>
                                            <a href="//facebook.com" target="_blank"><i class="zmdi zmdi-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="//twitter.com" target="_blank"><i class="zmdi zmdi-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="//vimeo.com" target="_blank"><i class="zmdi zmdi-vimeo"></i></a>
                                        </li>
                                        <li>
                                            <a href="//linkedin.com" target="_blank"><i class="zmdi zmdi-linkedin-box"></i></a>
                                        </li>
                                        <li>
                                            <a href="//skype.com" target="_blank"><i class="zmdi zmdi-skype"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <!-- top bar right -->
                            <div class="top-bar-right-wrapper">
                                <router-link to="/contact" class="ht-btn ht-btn--default d-inline-block">GET A QUOTE</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--=======  End of header top bar  =======-->

            <!--=======  header info area  =======-->
            <div class="header-info-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="header-info-wrapper align-items-center">
                                <!-- logo -->
                                <div class="logo">
                                    <router-link to="/">
                                        <img src="assets/img/logo/logo.png" class="img-fluid" alt="Brand Logo">
                                    </router-link>
                                </div>

                                <!-- header contact info -->
                                <div class="header-contact-info">
                                    <div class="header-info-single-item">
                                        <div class="header-info-single-item__icon">
                                            <i class="zmdi zmdi-smartphone-android"></i>
                                        </div>
                                        <div class="header-info-single-item__content">
                                            <h6 class="header-info-single-item__title">Phone</h6>
                                            <p class="header-info-single-item__subtitle">
                                                <a href="tel:989875596854">98 9875 5968 54</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="header-info-single-item">
                                        <div class="header-info-single-item__icon">
                                            <i class="zmdi zmdi-home"></i>
                                        </div>
                                        <div class="header-info-single-item__content">
                                            <h6 class="header-info-single-item__title">Address</h6>
                                            <p class="header-info-single-item__subtitle">Your address goes here</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- mobile menu -->
                                <div class="mobile-navigation-icon" id="mobile-menu-trigger" @click="mobiletoggleClass('addClass', 'active')">
                                    <i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--=======  End of header info area =======-->
            
            <!--=======  header navigation area  =======-->
            <div class="header-navigation-area default-bg" :class="{'is-sticky': isSticky}">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <!-- header navigation -->
                            <div class="header-navigation header-navigation--header-default position-relative">
                                <div class="header-navigation__nav position-static">
                                    <nav>
                                        <ul>
                                            <li class="has-children has-children--multilevel-submenu">
                                                <router-link to="/">HOME</router-link>
                                                <ul class="submenu">
                                                    <li>
                                                        <router-link to="/">Home One</router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="/home-two">Home Two</router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="/home-three">Home Three</router-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <router-link to="/about">ABOUT</router-link>
                                            </li>

                                            <li class="has-children has-children--multilevel-submenu">
                                                <router-link to="/service">SERVICE</router-link>
                                                <ul class="submenu">
                                                    <li>
                                                        <router-link to="/service">Service</router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="/service-details">Service Details</router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="/service-details-right">Service Details Right Sidebar</router-link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="has-children has-children--multilevel-submenu">
                                                <router-link to="/project">PROJECT</router-link>
                                                <ul class="submenu">
                                                    <li>
                                                        <router-link to="/project">Project</router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="/project-details">Project Details</router-link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="has-children has-children--multilevel-submenu">
                                                <router-link to="/blog-left-sidebar">BLOG</router-link>
                                                <ul class="submenu">
                                                    <li>
                                                        <router-link to="/blog-left-sidebar">Blog Left Sidebar</router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="/blog-right-sidebar">Blog Right Sidebar</router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="/blog-details">Blog Details</router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="/blog-details-right-sidebar">Blog Details Right Sidebar</router-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <router-link to="/contact">CONTACT</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/login">LOGIN</router-link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--=======  End of header navigation area =======-->
        </div>
    </div>
    <!--====================  End of header area  ====================-->
</template>

<script>
    export default {
        data() {
            return {
                isSticky: false
            }
        },
        methods: {
            // offcanvas mobile-menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY
                if(scroll >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        }
    };
</script>