<template>
    <div class="main-container">
        <Header />
        <Breadcrumb title="Project Details" urlText="Project Details" />
        <ProjectDetailsWrapper />
        <BrandCarousel addClass="grey-bg" />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import data from '../data/project.json'
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ProjectDetailsWrapper from '../components/sections/ProjectDetailsWrapper'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            Breadcrumb,
            ProjectDetailsWrapper,
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
            title: 'Castro - Project Details',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

