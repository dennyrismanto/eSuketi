<template>
    <div class="main-container">
        <Header />
        <HeroOne :sliderData="data.heroThree" />
        <Feature />
        <AboutSectionTwo />
        <ServiceTabs />
        <Testimonial />
        <ProjectGallery />
        <BrandCarousel addClass="grey-bg" />
        <BlogSection />
        <Footer/>
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import HeroOne from '@/components/sections/HeroOne';
    import Feature from '@/components/Feature';
    import AboutSectionTwo from '@/components/sections/AboutSectionTwo';
    import ServiceTabs from '@/components/sections/ServiceTabs';
    import Testimonial from '@/components/Testimonial';
    import ProjectGallery from '@/components/sections/ProjectGallery';
    import BrandCarousel from '@/components/BrandCarousel';
    import BlogSection from '@/components/sections/BlogSection';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    import data from '../data/slider.json'
    export default {
        data () {
            return {
                data
            }
        },
        components: {
            Header,
            HeroOne,
            Feature,
            AboutSectionTwo,
            ServiceTabs,
            Testimonial,
            ProjectGallery,
            BrandCarousel,
            BlogSection,
            Footer,
            OffCanvasMobileMenu
        },
        metaInfo: {
            title: 'Castro - Home Three',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>