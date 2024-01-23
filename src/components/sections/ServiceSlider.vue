<template>
  <!--====================  service grid slider area ====================-->
  <div class="service-grid-slider-area section-space--inner--120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title-area text-center">
            <h2 class="section-title section-space--bottom--50">
              {{ data.serviceOne.sectionTitle }}<span class="title-icon"></span>
            </h2>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="service-slider">
            <div class="service-slider__container">
              <div class="service-slider__wrapper">
                <swiper
                  :breakpoints="swiperOptions.breakpoints"
                  :slides-per-view="3"
                  :space-between="30"
                  :loop="true"
                  @swiper="onSwiper"
                >
                  <swiper-slide
                    class="swiper-slide"
                    v-for="service in data.serviceOne.serviceList"
                    :key="service.id"
                  >
                    <ServiceItem :service="service" />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of service grid slider area  ====================-->
</template>

<script>
import ServiceItem from "components/ServiceItem.vue";
import data from "../../data/service.json";

import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ServiceItem,
  },

  data() {
    return {
      data,

      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
    };
  },

  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
  },
};
</script>
