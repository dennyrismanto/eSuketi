<template>
    <div class="main-container">
        <Header />
        <Breadcrumb title="Blog Details" urlText="Blog Details" />
        <BlogDetailsWrapper />
        <BrandCarousel addClass="grey-bg" />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import BlogDetailsWrapper from '../components/sections/BlogDetailsWrapper'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        components: {
            Header,
            Breadcrumb,
            BlogDetailsWrapper,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        metaInfo: {
            title: 'Castro - Blog Details',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

