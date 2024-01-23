<template>
    <div class="service-details">
        <div class="service-gallery">
            <div class="swiper-container service-gallery__container">
                <div class="swiper-wrapper service-gallery__wrapper">
                    <swiper
                        :slides-per-view="1"
                        :speed="1000"
                        :loop="true"
                        :navigation="swiperOptions.navigation"
                    >
                        <swiper-slide class="service-gallery__single-slide" v-for="item in serviceDetailsSlider" :key="item.id">
                            <div class="item">
                                <img :src="item.image" class="img-fluid" alt="service details image">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="ht-swiper-button-prev ht-swiper-button-prev-14 ht-swiper-button-nav">
                <i class="ion-ios-arrow-left"></i>
            </div>
            <div class="ht-swiper-button-next ht-swiper-button-next-14 ht-swiper-button-nav">
                <i class="ion-ios-arrow-forward"></i>
            </div>
        </div>

        <div class="content section-space--top--30">
            <div class="row">
                <div class="col-12">
                    <h2>{{ serviceDetails.title }}</h2>
                    <p v-html="serviceDetails.desc"></p>
                </div>
                <div class="col-lg-6 col-12 section-space--top--30" v-for="item in serviceDetails.serviceLists" :key="item.id">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SwiperCore, { Navigation } from "swiper/core";
    import { Swiper, SwiperSlide } from 'swiper/vue';
    SwiperCore.use([Navigation])

    export default {
        props: ['serviceDetailsSlider', 'serviceDetails'],
        data () {
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.ht-swiper-button-next-14',
                        prevEl: '.ht-swiper-button-prev-14'
                    }
                }
            }
        },

        components: {
            Swiper,
            SwiperSlide,
        },
    };
</script>