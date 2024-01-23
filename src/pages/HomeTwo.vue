<template>
    <div class="main-container">
        <Header />
        <HeroOne :sliderData="data.heroTwo" />
        <AboutSection />
        <ProjectGridSlider />
        <ServiceTabs />
        <Testimonial />
        <TeamJob />
        <BrandCarousel addClass="grey-bg" />
        <BlogSection />
        <Footer/>
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import HeroOne from '@/components/sections/HeroOne';
    import AboutSection from '@/components/sections/AboutSection';
    import ProjectGridSlider from '@/components/sections/ProjectGridSlider';
    import ServiceTabs from '@/components/sections/ServiceTabs';
    import Testimonial from '@/components/Testimonial';
    import TeamJob from '@/components/sections/TeamJob';
    import BrandCarousel from '@/components/BrandCarousel';
    import BlogSection from '@/components/sections/BlogSection';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    import data from '../data/slider.json'

    export default {
        data() {
            return {
                data
            }
        },

        components: {
            Header,
            HeroOne,
            AboutSection,
            ProjectGridSlider,
            ServiceTabs,
            Testimonial,
            TeamJob,
            BrandCarousel,
            BlogSection,
            Footer,
            OffCanvasMobileMenu
        },
        metaInfo: {
            title: 'Castro - Home Two',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>
