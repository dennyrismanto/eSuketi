<template>
    <div class="main-container">
        <Header />
        <Breadcrumb title="Blog Right Sidebar" urlText="Blog Right Sidebar" />
        <BlogMainWrapperRight />
        <BrandCarousel addClass="grey-bg" />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import BlogMainWrapperRight from '../components/sections/BlogMainWrapperRight'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            Breadcrumb,
            BlogMainWrapperRight,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        metaInfo: {
            title: 'Castro - Blog Right Sidebar',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

