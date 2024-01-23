<template>
    <div class="main-container">
        <Header />
        <Breadcrumb title="Service Details" urlText="Service Details" />
        <ServiceDetailsWrapper />
        <BrandCarousel addClass="grey-bg" />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import data from '../data/service.json'
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ServiceDetailsWrapper from '../components/sections/ServiceDetailsWrapper'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            Breadcrumb,
            ServiceDetailsWrapper,
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
            title: 'Castro - Service Details',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

