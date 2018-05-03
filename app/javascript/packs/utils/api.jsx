import axios from 'axios';

function getRestaurants() {
  return axios.get('/restaurants');
}

function addRestaurant(rest) {
  return axios.post('/restaurants', rest);
}
export { getRestaurants, addRestaurant };
