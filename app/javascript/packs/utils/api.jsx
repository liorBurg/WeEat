import axios from 'axios';

function getRestaurants() {
  return axios.get('/restaurants');
}

function getReviews(restId) {
  return axios.get('/restaurants/' + restId + '/reviews');
}

function addRestaurant(rest) {
  return axios.post('/restaurants', rest);
}
export { getRestaurants, getReviews, addRestaurant };
