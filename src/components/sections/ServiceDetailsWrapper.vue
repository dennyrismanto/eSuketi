<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Service section start-->
        <div class="service-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-12 order-1 order-lg-2">
                        <ServiceDetailsMain :serviceDetailsSlider="data.serviceDetailsSlider" :serviceDetails="data.serviceDetails" />
                    </div>

                    <div class="col-lg-4 col-12 order-2 order-lg-1">
                        <ServiceDetailsSidebar :serviceSidebar="data.serviceSidebar" />
                    </div>
                </div>
            </div>
        </div>
        <!--Service section end-->
    </div>
</template>

<script>
    import ServiceDetailsSidebar from '@/components/ServiceDetailsSidebar';
    import ServiceDetailsMain from '@/components/ServiceDetailsMain';

    import data from '../../data/service.json'
    export default {
        components: {
            ServiceDetailsSidebar,
            ServiceDetailsMain
        },
        data () {
            return {
                data
            }
        }
    };
</script>