<template>
  <!--====================  testimonial slider area ====================-->
  <div
    class="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120"
    :style="{ backgroundImage: `url(${data.bgImg})` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-10 m-auto">
          <div class="testimonial-slider">
            <div class="testimonial-slider__container-area">
              <div class="testimonial-slider__container">
                <div class="testimonial-slider__wrapper">
                  <swiper
                    :slides-per-view="1"
                    :space-between="30"
                    :speed="1000"
                    :pagination="swiperOptions.pagination"
                  >
                    <swiper-slide
                      class="testimonial-slider__single-slide"
                      v-for="testimonial in data.testimonialSliders"
                      :key="testimonial.id"
                    >
                      <div class="author">
                        <div class="author__image">
                          <img :src="testimonial.thumb" alt="" />
                        </div>
                        <div class="author__details">
                          <h4 class="name">{{ testimonial.name }}</h4>
                          <div class="designation">
                            {{ testimonial.designation }}
                          </div>
                        </div>
                      </div>
                      <div class="content">
                        {{ testimonial.content }}
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
              <div class="swiper-pagination swiper-pagination-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of testimonial slider area  ====================-->
</template>

<script>
import data from "src/data/testimonial.json";

import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use([Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      data,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination-3",
          type: "bullets",
          clickable: true,
        },
      },
    };
  },
};
</script>
