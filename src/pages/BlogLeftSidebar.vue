<template>
    <div class="main-container">
        <Header />
        <Breadcrumb title="Blog Left Sidebar" urlText="Blog Left Sidebar" />
        <BlogMainWrapper />
        <BrandCarousel addClass="grey-bg" />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import BlogMainWrapper from '../components/sections/BlogMainWrapper'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumb,
            BlogMainWrapper,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        metaInfo: {
            title: 'Castro - Blog Left Sidebar',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

