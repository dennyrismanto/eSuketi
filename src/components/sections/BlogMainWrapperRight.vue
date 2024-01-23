<template>
    <div class="page-wrapper section-space--inner--120">
        <div class="blog-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-sm-6" v-for="blog in data.blogPosts" :key="blog.id">
                                <BlogPost :blog="blog" />
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col">
                                <ul class="page-pagination section-space--top--30">
                                    <li><a href="#"><i class="fa fa-angle-left"></i> Prev</a></li>
                                    <li class="active"><a href="#">01</a></li>
                                    <li><a href="#">02</a></li>
                                    <li><a href="#">03</a></li>
                                    <li><a href="#"><i class="fa fa-angle-right"></i> Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <BlogSidebar :blogSidebar="data.blogSidebarData" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../data/blog.json'

import BlogSidebar from '@/components/sections/BlogSidebar';
import BlogPost from '@/components/BlogPost';
    export default {
        components: {
            BlogSidebar,
            BlogPost
        },
        data () {
            return {
                data
            }
        },
    };
</script>