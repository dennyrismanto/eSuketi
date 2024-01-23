<template>
  <!--====================  brand logo area ====================-->
  <div
    class="brand-logo-slider-area section-space--inner--60"
    :class="addClass"
  >
    <div class="container">
      <!-- brand logo slider -->
      <div class="brand-logo-slider__container-area">
        <div class="brand-logo-slider__container">
          <div class="brand-logo-slider__wrapper">
            <swiper
              :breakpoints="swiperOptions.breakpoints"
              :slides-per-view="3"
              :space-between="30"
              :loop="true"
            >
              <swiper-slide
                class="brand-logo-slider__single"
                v-for="item in data"
                :key="item.id"
              >
                <div class="image text-center">
                  <a href="#">
                    <img
                      :src="item.brandlogo"
                      class="img-fluid"
                      alt="brand logo"
                    />
                  </a>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of brand logo area  ====================-->
</template>

<script>
import data from "src/data/brandlogo.json";

import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  props: ["addClass"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      data,
      swiperOptions: {
        breakpoints: {
          1499: {
            slidesPerView: 4,
          },

          768: {
            slidesPerView: 3,
          },

          320: {
            slidesPerView: 2,
          },
        },
      },
    };
  },
};
</script>
