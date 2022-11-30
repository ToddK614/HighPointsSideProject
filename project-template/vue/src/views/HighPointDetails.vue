<template>
    <div class="container">
        <h2 class="high-point-name">{{ highpointname.highpointname }}</h2>
         <img v-bind:src=getImgUrl(highpointname.picName)>
            <div><h5 class="description">Description</h5></div>
            <div><p class="description">{{highpointname.description}}</p></div>
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
        getImgUrl(pic) {
            console.log("picture" + pic);
            return require('../assets/' + pic)
        }
    }
}
</script>

<style>
.container {
  background-color: #F2F0F2;
  margin: auto;
  margin-top: 20px;
  border-radius: 5px;
  width: 800px;
  height: auto;
}
.row {
  text-align: center;
  justify-content: center;
}

img {
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

p.description {
  text-align: left;
  margin-bottom: 0px;
}

h5.description {
  margin: 0px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.high-point-name {
  margin: 0px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
}

</style>