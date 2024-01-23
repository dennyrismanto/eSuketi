<template>
    <div class="main-container">
        <Header />
        <Breadcrumb title="Service" urlText="Service" />

        <div class="page-wrapper section-space--inner--120">
            <!--Service section start-->
            <div class="service-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="service-item-wrapper">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-12 section-space--bottom--30" v-for="service in data.serviceOne.serviceList" :key="service.id">
                                        <ServiceItem :service="service" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Service section end-->
        </div>

        <BrandCarousel addClass="grey-bg" />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import data from '../data/service.json'
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ServiceItem from '../components/ServiceItem'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            Breadcrumb,
            ServiceItem,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                data
            }
        },
        metaInfo: {
            title: 'Castro - Service',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

