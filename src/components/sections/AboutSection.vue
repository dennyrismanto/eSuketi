<template>
  <div class="video-cta-area section-space--inner--120">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-7">
          <div class="video-cta-content">
            <h4 class="video-cta-content__small-title">
              {{ data.sectionSubTitle }}
            </h4>
            <h3 class="video-cta-content__title">{{ data.sectionTitle }}</h3>
            <p class="video-cta-content__text">{{ data.desc }}</p>
            <router-link to="/contact" class="ht-btn ht-btn--round"
              >CONTACT US</router-link
            >
          </div>
        </div>
        <div class="col-5">
          <div class="cta-video-image">
            <div class="video-popup">
              <div class="cta-video-image__image">
                <img :src="data.image" class="img-fluid" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "src/data/about.json";

export default {
  data() {
    return {
      data,
    };
  },
};
</script>
