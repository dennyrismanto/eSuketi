<template>
    <div class="blog-post-slider__single-slide blog-post-slider__single-slide--grid-view">
        <div class="blog-post-slider__image section-space--bottom--30">
            <router-link to="/blog-details">
                <img :src="blog.image" class="img-fluid" alt="blog-image">
            </router-link>
        </div>
        <div class="blog-post-slider__content">
            <p class="post-date">{{ blog.date }}</p>
            <h3 class="post-title">
                <router-link to="/blog-details">{{ blog.title }}</router-link>
            </h3>
            <p class="post-excerpt">{{ blog.desc }}</p>
            <router-link to="/blog-details" class="see-more-link">READ MORE</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blog']
    };
</script>