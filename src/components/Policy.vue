<template>
    <div class="feature-section section-space--inner--100 grey-bg">
        <div class="container">
            <div class="col-lg-12">
                <div class="feature-item-wrapper">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12 section-space--bottom--30" v-for="policy in policyData" :key="policy.id">
                            <div class="feature">
                                <div class="icon">
                                    <img :src="policy.icon" class="img-fluid" alt="icon">
                                </div>
                                <div class="content">
                                    <h3>{{ policy.title }}</h3>
                                    <p>{{ policy.body }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['policyData']
    };
</script>