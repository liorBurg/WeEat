import axios from 'axios';
const googleKey = '&key=AIzaSyCMYVdjkRobvAvklIp0_GHqUNwUA_Zkxc0';
const googleGeocodingURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';


function getRestaurants() {
  return axios.get('/restaurants');
}

function getReviews(restId) {
  return axios.get('/restaurants/' + restId + '/reviews');
}

function addRestaurant(rest) {
  return axios.post('/restaurants', rest);
}

function getGeocoding(address) {
  return axios.get(googleGeocodingURL + address + googleKey);
}

export { getRestaurants, getReviews, addRestaurant, getGeocoding };
