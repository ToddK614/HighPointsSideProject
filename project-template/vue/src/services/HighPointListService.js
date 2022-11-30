import axios from 'axios';

export default {

    getAllHighPoints() {
        return axios.get('home/highpointlist')
    },

    addHighPoint(highPoint) {
        console.log(highPoint)
        return axios.post('home/highpointlist', highPoint);
    }
}