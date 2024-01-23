<template>
    <div class="about-content-area grey-bg section-space--inner--120">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="video-cta-content">
                        <h4 class="video-cta-content__small-title">{{ data.sectionSubTitle }}</h4>
                        <h3 class="video-cta-content__title">{{ data.sectionTitle }}</h3>
                        <p class="video-cta-content__text">{{ data.desc }}</p>
                        <router-link to="/contact" class="ht-btn ht-btn--round">CONTACT US</router-link>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-image">
                        <img :src="data.aboutImage" class="img-fluid" alt="about image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/about.json'
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>