<template>
    <!--====================  project grid slider area ====================-->
    <div class="service-slider-wrapper">
        <div class="service-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-area text-center">
                            <h2 class="section-title mb-0">{{ data.sectionTitleTwo }}<span class="title-icon"></span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="service-grid-slider-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="service-slider">
                            <div class="service-slider__container service-slider__container--style2">
                                <div class="service-slider__wrapper">
                                    <swiper
                                        :breakpoints="swiperOptions.breakpoints"
                                        :slides-per-view="3"
                                        :space-between="30"
                                        :loop="true"
                                        :speed="1000"
                                    >
                                        <swiper-slide v-for="project in data.projectGrid" :key="project.id">
                                            <ProjectGrid :project="project" />
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--====================  End of project grid slider area  ====================-->
</template>

<script>
    import ProjectGrid from '../ProjectGrid.vue';
    import data from '../../data/project.json'

    import { Swiper, SwiperSlide } from 'swiper/vue';

    export default {
        components: {
            ProjectGrid,
            Swiper,
            SwiperSlide
        },
        data () {
            return {
                data,

                swiperOptions: {
                    breakpoints: {
                        320: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }
                }
            }
        }
    };
</script>