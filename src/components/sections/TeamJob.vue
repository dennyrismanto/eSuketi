<template>
    <!--====================  team job area ====================-->
    <div class="team-job-area section-space--inner--120">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="team-job__content">
                        <div class="team-job__title-wrapper">
                            <h2 class="team-job__title" v-html="data.sectionTitle"></h2>
                            <a href="#" class="see-more-link see-more-link--color">Meet Our Team</a>
                        </div>

                        <div class="team-job__content-wrapper">
                            <h2 class="team-job__title">{{ data.teamJobTitle }}
                                <span><a href="#" class="see-more-link see-more-link--color">VIEW ALL JOBS</a></span>
                            </h2>
                            <div class="team-job__list-wrapper">
                                <div class="team-job__single" v-for="item in data.teamjob" :key="item.id">
                                    <h3 class="title"> 
                                        <a href="#">{{ item.title }}</a>
                                    </h3>
                                    <p class="text">{{ item.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="team-job__image text-center">
                        <img :src="data.image" class="img-fluid" alt="thumbnail">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--====================  End of team job area  ====================-->
</template>

<script>
    import data from '../../data/teamjob.json'
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>