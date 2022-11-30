
<template>
  <div class="topfive">
    <h2 class="text-dark">Click a Picture to Explore a Top Five Point</h2>
    <div class="card-display">
        <high-point-card v-bind:topfive="topfive" v-for="topfive in topFiveList" v-bind:key="topfive.highpointname" />
    </div>
  </div>
</template>

<script>
import HighPointCard from '@/components/HighPointCard.vue';
export default {
    name: "topfive",
    components: {
      HighPointCard
    },
    computed: {
      topFiveList(){
        console.log (this.$store.state.topFivePoints);
        return this.$store.state.topFivePoints
      }
    }

}
</script>

<style>
h2.text-dark {
        text-align: center;
        margin-bottom: 0px;
        padding-bottom: 10px;
        background-color: white;
        opacity: 0.8;
    }
</style>