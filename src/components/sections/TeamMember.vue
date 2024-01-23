<template>
    <div class="team-member-area section-space--inner--120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area text-center">
                        <h2 class="section-title section-space--bottom--50">{{ teamData.sectionTitle }}<span class="title-icon"></span></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="team-member-wrapper">
                        <div class="row">
                            <!--Team member start-->
                            <div class="col-lg-3 col-sm-6 col-12 section-space--bottom--30" v-for="teamMember in teamData.teamMemberData" :key="teamMember.id">
                                <div class="team">
                                    <div class="image">
                                        <img :src="teamMember.image" alt="team member image">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">{{ teamMember.name }}</h3>
                                        <span>{{ teamMember.designation }}</span>
                                        <a href="mailto:info@example.com" class="email">{{ teamMember.email }}</a>
                                        <div class="social">
                                            <a :href="item.link" :class="item.addClass" target="_blank" v-for="item in teamMember.social" :key="item.id">
                                                <i :class="item.icon"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--Team member end-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['teamData']
    };
</script>