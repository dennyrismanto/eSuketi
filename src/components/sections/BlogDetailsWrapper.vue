<template>
    <div class="page-wrapper section-space--inner--120">
        <div class="blog-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 order-1 order-lg-2">
                        <div class="row">
                            <div class="blog-details col-12">
                                <BlogDetailsContent :blogDetailsData="data.blogDetails" />
                            </div>
                            <div class="col-12 section-space--top--60">
                                <BlogComment />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 order-2 order-lg-1">
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
import BlogDetailsContent from '@/components/BlogDetailsContent';
import BlogComment from '@/components/BlogComment';
    export default {
        components: {
            BlogSidebar,
            BlogDetailsContent,
            BlogComment
        },
        data () {
            return {
                data
            }
        },
    };
</script>