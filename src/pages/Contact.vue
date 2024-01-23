<template>
    <div class="main-container">
        <Header />
        <Breadcrumb title="Contact Us" urlText="Contact"  />
        <ContactMainWrapper />
        <BrandCarousel addClass="grey-bg" />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>

    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ContactMainWrapper from '../components/sections/ContactMainWrapper'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumb,
            ContactMainWrapper,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        metaInfo: {
            title: 'Castro - Contact Us',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

