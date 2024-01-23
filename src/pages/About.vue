<template>
    <div class="main-container">
        <Header />
        <Breadcrumb  title="About Us" urlText="About" />
        <AboutSectionThree />
        <Policy :policyData="data.policy" />
        <Experience :experience="data.experience" />
        <FunFact />
        <TeamMember :teamData="data.team" />
        <Testimonial />
        <BrandCarousel addClass="grey-bg" />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>

    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import AboutSectionThree from '../components/sections/AboutSectionThree'
    import Policy from '../components/Policy'
    import Experience from '../components/Experience'
    import FunFact from '../components/FunFact'
    import TeamMember from '../components/sections/TeamMember'
    import Testimonial from '../components/Testimonial'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    import data from '../data/about.json'
    export default {
        components: {
            Header,
            Breadcrumb,
            AboutSectionThree,
            Policy,
            Experience,
            FunFact,
            TeamMember,
            Testimonial,
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
            title: 'Castro - About Us',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

