<template>
    <div>
        <div id="add-high-point">
            <form id="fullForm" v-on:submit.prevent="addHighPoint">
                <h3 class="card-header" style="text-align: center">High Point Information</h3>
                <div class="form-group">
                    <label for="highPointStateAbbreviation">Please Enter State Abbreviation:</label>
                    <input
                    type="text"
                    class="form-control"
                    id="highPointStateAbbreviation"
                    placeholder="State Abbreviation"
                    v-model="highPoint.stateAbbreviation"
                    />
                </div>
                <div class="form-group">
                    <label for="highPointStateName">Please Enter State Name:</label>
                    <input
                    type="text"
                    class="form-control"
                    id="highPointStateName"
                    placeholder="State Name"
                    v-model="highPoint.stateName"
                    />
                </div>
                <div class="form-group">
                    <label for="highPointName">Please Enter High Point Name:</label>
                    <input
                    type="text"
                    class="form-control"
                    id="hpName"
                    placeholder="Name of High Point"
                    v-model="highPoint.hpName"
                    />
                </div>
                <div class="form-group">
                    <label for="highPointName">Please Enter High Point Elevation (ft):</label>
                    <input
                    type="text"
                    class="form-control"
                    id="hpElevationFeet"
                    placeholder="Elevation (ft)"
                    v-model.number="highPoint.hpElevationFeet"
                    />
                </div>
                <div class="form-group">
                    <label for="highPointRank">Please Enter High Point Rank:</label>
                    <input
                    type="text"
                    class="form-control"
                    id="hpRank"
                    placeholder="Rank"
                    v-model.number="highPoint.hpRank"
                    />
                </div>
                <div class="form-group">
                    <label for="Latitude">Please Enter High Point Latitude (N) / (-S):</label>
                    <input
                    type="text"
                    class="form-control"
                    id="Latitude"
                    placeholder="Latitude"
                    v-model="highPoint.latitude"
                    />
                </div>
                <div class="form-group">
                    <label for="Longitude">Please Enter High Point Longitude (E) / (-W):</label>
                    <input
                    type="text"
                    class="form-control"
                    id="Longitude"
                    placeholder="Latitude"
                    v-model="highPoint.longitude"
                    />
                </div>
                <div class="row justify-content-center">
                    <button class="btn btn-success" mx-auto type="submit" id="button-addon2">
                    Submit High Point Data
                    </button>
                    <p id = "newHighPointSubmitted" v-show="!elementHidden" class="hideElement">New Data Added!</p>
                </div>
    
                <div class= "row justify-content-center">
                    <button class="btn btn-dark" mx-auto v-on:click="back()">
                        Return to Home
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import HighPointListService from '../services/HighPointListService.js';

export default {
    name: "add-high-point",
    data() {
        return {
            highPoint: {},
            elementHidden: true,
        };
    },

    methods: {
        addHighPoint() {
            HighPointListService.addHighPoint(this.highPoint).then((response) => {
                console.log(response)
                this.highPoint = response.data;
                this.resetForm();
                this.elementHidden = false;
                this.timeOut();
                
            });
        },

        resetForm() {
            this.highPoint.stateAbbreviation = null;
            this.highPoint.stateName = null;
            this.highPoint.hpName = null;
            this.highPoint.hpElevationFeet = null;
            this.highPoint.hpRank = null;
            this.highPoint.latitude = null;
            this.highPoint.longitude = null;
        },
        
        timeOut() {
            setTimeout(() => this.elementHidden = true, 1000)
        },

        back() {
            this.$router.push({name: "home"}); // $ was missing and it errored!
        }
    },
};
</script>

<style>
#fullForm {
  background-color: #f2f0f2;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 800px;
  opacity: 0.9;
  border-radius: 5px;
}
#profileSubmitted {
  color: darkgreen
}

#create-profile{
  margin-top: 20px;
  
}

button.btn.btn-dark {
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 200px;
}

button.btn.btn-success {
  width: 200px;
}

</style>