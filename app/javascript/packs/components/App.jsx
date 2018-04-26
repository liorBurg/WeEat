import React, { Component } from 'react';
import Banner from './Banner';
import RestaurantsList from './RestaurantsList';
import Map from './Map';
import { getRestaurants } from '../utils/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rests: [],
      filteredRests: [],
    };
    this.updateRests = this.updateRests.bind(this);
    this.filterRests = this.filterRests.bind(this);
  }
  componentDidMount() {
    this.updateRests();
  }
  updateRests() {
    getRestaurants()
      .then(res => this.setState({
        rests: res.data,
        filteredRests: res.data,
      }))
      .catch(err => console.log(err));
  }
  filterRests(value) {
    let updatedRests = this.state.rests;
    updatedRests = updatedRests.filter(function (rest) {
      return rest.name.toLowerCase().search(value.toLowerCase()) !== -1;
    });
    this.setState({ filteredRests: updatedRests });
  }

  render() {
    return (
      <div>
        <Banner filterRests={this.filterRests}/>
        <div className="restaurants-container">
          <RestaurantsList rests={this.state.filteredRests}/>
          <Map />
        </div>
      </div>
    );
  }
}

//        {this.state.rests.length > 0 ? console.log(this.state.rests) : console.log('empty')}


export default App;
