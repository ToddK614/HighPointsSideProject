<template>
    <div class="container">
        <h2 class="high-point-name">{{ highpointname.highpointname }}</h2>
            <div><h5 class="instructions">Description</h5></div>
                <div class="row">
                    <div class="col col-lg-6">
                        <img v-bind:src=getImgUrl(highpointname.picName)>
                    </div>
                </div>
                <div class="col col-lg-6">
                    <p class="instructions">{{highpointname.description}}</p>
                </div>
    </div>
</template>

<script>
export default {
    name: "high-point-details",
    data() {
        return {
        highpointname: {},
    };
    },

    created() {
        let highpointname = this.$route.params.highpointname;
        console.log(this.$store.state.highpointname);
        this.highpointname = this.$store.state.topFivePoints.find((top) => {
            return top.highpointname == highpointname;
        });
        console.log(this.highpointname);
    },

    methods: {
        gitImgUrl(pic) {
            console.log("picture" + pic);
            return require('../assets/' + pic)
        }
    }
}
</script>

<style>

</style>