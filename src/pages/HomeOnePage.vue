<template>
  <q-page>
    <div class="main-container">
      <HeaderHome />
      <HeroOne :sliderData="data.heroOne" />
      <ServiceSlider />
      <FunFact />
      <AboutSection />
      <LatestProject />
      <TeamJob />
      <Testimonial />
      <BlogSection addClass="grey-bg" />
      <BrandCarousel />
      <FooterHome />
      <!-- <OffCanvasMobileMenu /> -->
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import HeaderHome from "src/components/HeaderWebsite.vue";
import HeroOne from "components/sections/HeroOne.vue";
import ServiceSlider from "components/sections/ServiceSlider.vue";
import FunFact from "components/FunFact.vue";
import AboutSection from "components/sections/AboutSection.vue";
import LatestProject from "components/sections/LatestProject.vue";
import TeamJob from "components/sections/TeamJob.vue";
import Testimonial from "src/components/TestimonialComponent.vue";
import BlogSection from "components/sections/BlogSection.vue";
import BrandCarousel from "components/BrandCarousel.vue";
import FooterHome from "src/components/FooterWebsite.vue";
// import OffCanvasMobileMenu from "components/OffCanvasMobileMenu.vue";

import datas from "src/data/slider.json";

export default defineComponent({
  components: {
    HeaderHome,
    HeroOne,
    ServiceSlider,
    FunFact,
    AboutSection,
    LatestProject,
    TeamJob,
    Testimonial,
    BlogSection,
    BrandCarousel,
    FooterHome,
    // OffCanvasMobileMenu,
  },

  setup() {
    const dataRef = ref(datas);

    return {
      data: dataRef,
    };
  },
});
</script>
