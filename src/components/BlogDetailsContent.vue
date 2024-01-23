<template>
    <div class="blog-inner">
        <div class="media">
            <div class="image">
                <img :src="blogDetailsData.image" alt="image">
            </div>
        </div>
        <div class="content">
            <ul class="meta">
                <li>By 
                    <a :href="blogDetailsData.metas.authorLink">{{ blogDetailsData.metas.author }}</a>
                </li>
                <li>
                    {{ blogDetailsData.metas.date }}
                </li>
                <li>
                    <a href="commentLink">{{ blogDetailsData.metas.comment }}</a>
                </li>
            </ul>
            <h2 class="title">{{ blogDetailsData.title }}</h2>
            <div class="desc section-space--bottom--30">
                <p>{{ blogDetailsData.desc_para1 }}</p>
                <p>{{ blogDetailsData.desc_para2 }}</p>

                <blockquote class="blockquote section-space--bottom--30 section-space--top--30">
                    <p>{{ blogDetailsData.blockQuote }}</p>
                    <span class="author">__{{ blogDetailsData.author }}</span>
                </blockquote>

                <p>{{ blogDetailsData.desc_para3 }}</p>
                <p>{{ blogDetailsData.desc_para4 }}</p>

            </div>
            <ul class="tags">
                <li v-for="tag in blogDetailsData.tags" :key="tag.id">
                    <router-link :to="tag.link">{{ tag.tagName }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blogDetailsData']
    };
</script>