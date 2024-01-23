<template>
    <div class="main-container">
        <Header />
        <Breadcrumb title="Blog Details Right Sidebar" urlText="Blog Details" />
        <BlogDetailsWrapperRight />
        <BrandCarousel addClass="grey-bg" />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import BlogDetailsWrapperRight from '../components/sections/BlogDetailsWrapperRight'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        components: {
            Header,
            Breadcrumb,
            BlogDetailsWrapperRight,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        metaInfo: {
            title: 'Castro - Blog Details Right Sidebar',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

