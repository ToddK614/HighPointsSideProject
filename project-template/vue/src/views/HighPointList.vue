<template>
<div>
    <div class="topfive">
        <h2 class="text-dark">United States High Points</h2>
    </div>
    <table class="table table-light">
        <thead>
            <tr>
            <th scope="col">State Abbreviation</th>
            <th scope="col">State Name</th>
            <th scope="col">High Point Name</th>
            <th scope="col">Elevation (ft)</th>
            <th scope="col">US Rank</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="highPoint of allHighPoints" v-bind:key="highPoint.hpId">
            <th scope="row">{{highPoint.stateAbbreviation}}</th>
            <td>{{highPoint.stateName}}</td>
            <td>{{highPoint.hpName}}</td>
            <td>{{highPoint.hpElevationFeet}}</td>
            <td>{{highPoint.hpRank}}</td>
            <td>{{highPoint.latitude}}</td>
            <td>{{highPoint.longitude}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import HighPointListService from '../services/HighPointListService.js';

export default {
    name: "high-point-list",
   
    created() {
        HighPointListService.getAllHighPoints().then((response) => {
            let highPoints = response.data;
            this.$store.commit('SET_HIGH_POINTS', highPoints);
        })
    },
    computed: {
        allHighPoints() {
            return this.$store.state.highPoints;
        }
    }

}
</script>

<style>
h2.text-dark {
        text-align: center;
        margin-bottom: 0px;
        padding-bottom: 10px;
        background-color: #F1Faee;
        opacity: 0.8;
    }


</style>