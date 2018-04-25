import React, { Component } from 'react';
import Banner from './Banner';
import FilterBar from './FilterBar';
import RestaurantsList from './RestaurantsList';
import Map from './Map';
import { getRestaurants } from '../utils/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rests: [],
    };
    this.updateRests = this.updateRests.bind(this);
  }
  componentDidMount() {
    this.updateRests();
  }
  updateRests() {
    getRestaurants()
      .then(res => this.setState({ rests: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.rests.length > 0 ? console.log(this.state.rests) : console.log('empty')}
        <Banner />
        <FilterBar />
        <div className="restaurants-container">
          <RestaurantsList rests={this.state.rests}/>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
