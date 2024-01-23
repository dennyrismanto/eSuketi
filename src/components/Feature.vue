<template>
    <div class="feature-icon-area section-space--inner--120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="feature-icon-wrapper">
                        <div class="row">
                            <div class="col-lg-3 col-md-6" v-for="feature in data" :key="feature.id">
                                <div class="single-feature-icon">
                                    <div class="single-feature-icon__image">
                                        <img :src="feature.icon" class="img-fluid" alt="icon">
                                    </div>
                                    <h3 class="single-feature-icon__title">{{ feature.title }}</h3>
                                    <p class="single-feature-icon__content">{{ feature.desc }}</p>
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
    import data from '../data/features.json'
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>