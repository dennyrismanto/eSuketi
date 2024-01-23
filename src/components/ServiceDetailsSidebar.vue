<template>
    <aside>
        <div class="sidebar-widget">
            <h3 class="sidebar-title">{{ serviceSidebar.title }}</h3>
            <ul class="sidebar-list">
                <li v-for="list in serviceSidebar.lists" :key="list.id">
                    <router-link :to="list.url">
                        <i :class="list.icon"></i> 
                        {{ list.name }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="sidebar-widget">
            <h3 class="sidebar-title">Download brochure</h3>
            <ul class="sidebar-list">
                <li>
                    <a href="#">
                        <i class="fa fa-file-pdf-o"></i>
                        Brochures.PDF
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-file-word-o"></i>
                        Brochures.DOC
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
    export default {
        props: ['serviceSidebar']
    };
</script>