<template>
    <div class="service-grid-item service-grid-item--style2">
        <div class="service-grid-item__image">
            <div class="service-grid-item__image-wrapper">
                <router-link to="/project-details">
                    <img :src="project.image" class="img-fluid" alt="thumbnail">
                </router-link>
            </div>

        </div>
        <div class="service-grid-item__content">
            <h3 class="title">
                <router-link to="/project-details">
                    {{ project.title }}
                </router-link>
            </h3>
            <p class="subtitle">{{ project.desc }}</p>
            <router-link to="/project-details" class="see-more-link">VIEW MORE</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['project']
    };
</script>

<style lang="scss">

</style>