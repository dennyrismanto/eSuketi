<template>
  <!--====================  footer area ====================-->
  <div class="footer-area dark-bg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer-content-wrapper section-space--inner--100">
            <div class="row">
              <div class="col-3">
                <FooterAbout :logo="data.footerLogo" :desc="data.footerDesc" />
              </div>
              <div class="col-3">
                <FooterLink
                  :title="data.footerLinkTitleOne"
                  :nav="data.navListOne"
                />
              </div>
              <div class="col-3">
                <FooterLink
                  :title="data.footerLinkTitleTwo"
                  :nav="data.navListTwo"
                />
              </div>
              <div class="col-3">
                <ContactWidget :contactWidgetData="data.footerContactWidget" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright-wrapper">
      <div class="footer-copyright text-center">
        <p>
          &copy; 2022 <b class="text-white">Castro</b> Made with
          <i class="fa fa-heart text-danger"></i> by
          <a href="https://hasthemes.com/"><b>HasThemes</b></a>
        </p>
      </div>
    </div>
  </div>
  <!--====================  End of footer area  ====================-->
</template>

<script>
import { ref } from "vue";
import FooterAbout from "components/FooterAbout.vue";
import FooterLink from "components/FooterLink.vue";
import ContactWidget from "components/ContactWidget.vue";

import datas from "src/data/footer.json";
export default {
  components: {
    FooterAbout,
    FooterLink,
    ContactWidget,
  },
  setup() {
    const dataRef = ref(datas);
    return {
      data: dataRef,
    };
  },
};
</script>
