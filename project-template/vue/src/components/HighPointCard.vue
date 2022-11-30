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
        getImgUrl(pic) {
            console.log("picture" + pic);
            return require('../assets/' + pic)
        }
    }
}
</script>

<style>

.card {
    background-color: lightblue;
    border-style: none;
    border-radius: 5px;
    width: 220px;
    height: 220px;
    margin: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .card-img {
    height: 100%
}

div.card-img-overlay {
    padding-top: 5px;
}

h2.card-text {
    margin-top: -15px;
    padding-bottom: 0px;
    
}

#top-five-name {
    color: black;
    font-size: 28px;
    text-align: center;
}

#top-five-name:hover {
    color: #00ccbe;
    }

</style>