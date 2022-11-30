import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')

let currentUser = null;
if ((localStorage.getItem('user') && localStorage.getItem('user') != 'undefined')) {
  currentUser = JSON.parse(localStorage.getItem('user'));
}

if(currentToken && currentToken != 'undefined') {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    highPoints: [],
    topFivePoints: [
      {
        highpointname: "Mt McKinley (Denali)",
        highpointrank: 1,
        picName: "Mt-McKinley.jpg",
        description: "Denali, also called Mount McKinley, is the tallest mountain in North America, located in south-central Alaska." +
        " With a peak that reaches 6,190 meters (20,310 feet) above sea level, Denali is the third-highest of the Seven Summits " +
        "(the tallest peaks on all seven continents). Denali is about 210 kilometers (130 miles) north-northwest of Anchorage. " +
        "Sixty million years ago, tectonic uplift pushed Earth's crust upward, forming Denali and the other Alaska Range mountains. " +
        "Denali is the centerpiece of the Denali National Park and Preserve, which spans 2.4 million hectares (6 million acres) of land."
      },
      {
        highpointname: "Mt Whitney",
        highpointrank: 2,
        picName: "Mt-Whitney.jpg",
        description: "Mount Whitney is the highest mountain in the contiguous United States and the Sierra Nevada, with an elevation of " +
        "14,505 feet (4,421 m). It is in East–Central California, on the boundary between California's Inyo and Tulare counties, 84.6 miles "+
        "west-northwest of North America's lowest point, Badwater Basin in Death Valley National Park, at 282 ft (86 m) below sea level. " +
        "The mountain's west slope is in Sequoia National Park and the summit is the southern terminus of the John Muir Trail, which runs " +
        "211.9 mi from Happy Isles in Yosemite Valley. The eastern slopes are in Inyo National Forest in Inyo County."
      }
    ],
    token: currentToken || '',
    user: currentUser || {}, // If a user is an admin, their user.role will be 'admin'
    
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    },
    SET_HIGH_POINTS(state, highPoints) {
      state.highPoints = highPoints;
    }
  }
})
