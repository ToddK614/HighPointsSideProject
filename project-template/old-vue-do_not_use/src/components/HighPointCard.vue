<template>
    <router-link v-bind:to="{name:'highPointDetails', params: { highpointname:topfive.highpointname }}">
        <div class="card bg-dark text-black" style="width: 18rem;">
            <img class="card-img" v-bind:src=getImgUrl(topfive.picName)>
            <div class="card-img-overlay">
                <h2 id="top-five-name">{{ topfive.highpointname }}</h2>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name:'high-point-card',
    props: ["topfive"],
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