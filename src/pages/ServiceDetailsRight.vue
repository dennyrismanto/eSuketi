<template>
    <div class="main-container">
        <Header />
        <Breadcrumb title="Service Details Right Sidebar" urlText="Service Details Right Sidebar" />
        <ServiceDetailsWrapperRight />
        <BrandCarousel addClass="grey-bg" />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import data from '../data/service.json'
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ServiceDetailsWrapperRight from '../components/sections/ServiceDetailsWrapperRight'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            Breadcrumb,
            ServiceDetailsWrapperRight,
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
            title: 'Castro - Service Details Right Sidebar',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

