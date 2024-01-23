<template>
    <div>
        <div class="sidebar-widget">
            <h3 class="sidebar-title">{{ blogSidebar.searchTitle }}</h3>
            <div class="sidebar-search">
                <form action="#">
                    <input type="text" placeholder="Search">
                    <button><i class="ion-ios-search"></i></button>
                </form>
            </div>
        </div>

        <div class="sidebar-widget">
            <h3 class="sidebar-title">{{ blogSidebar.CategoriesTitle }}</h3>
            <ul class="sidebar-list">
                <li v-for="category in blogSidebar.categories" :key="category.id">
                    <router-link :to="category.link">{{ category.title }}</router-link>
                </li>
            </ul>
        </div>

        <div class="sidebar-widget">
            <h3 class="sidebar-title">{{ blogSidebar.popularPostTitle }}</h3>
            <div class="sidebar-blog" v-for="popularPost in blogSidebar.popularPost" :key="popularPost.id">
                <router-link to="/blog-details" class="image">
                    <img :src="popularPost.image" alt="image">
                </router-link>
                <div class="content">
                    <h5>
                        <router-link to="/blog-details">{{ popularPost.title }}</router-link>
                    </h5>
                    <span>{{ popularPost.date }}</span>
                </div>
            </div>
        </div>

        <div class="sidebar-widget">
            <h3 class="sidebar-title">{{ blogSidebar.tagTitle }}</h3>
            <ul class="sidebar-tag">
                <li v-for="tag in blogSidebar.tags" :key="tag.id">
                    <router-link :to="tag.link">{{ tag.name }}</router-link>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['blogSidebar']
    };
</script>