import axios from 'axios';

function getRestaurants() {
  return axios.get('/restaurants');
}

export { getRestaurants };
