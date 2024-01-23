<template>
  <q-layout view="lHh LpR lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref } from "vue";

import BootstrapVueNext from "bootstrap-vue-next";

import "swiper/swiper-bundle.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "src/css/font-awesome.min.css";
import "src/css/material-design-iconic-font.min.css";
import "src/css/ionicons.min.css";
import "src/css/flaticon.min.css";
import "src/css/animate.min.css";
import "src/css/style.scss";

export default {
  setup() {
    return {
      BootstrapVueNext,
    };
  },
};
</script>
