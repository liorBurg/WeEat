import React, { Component } from 'react';
import Banner from './Banner';
import RestaurantsList from './RestaurantsList';
import Map from './Map';
import { getRestaurants } from '../utils/api';
import { filterRests } from '../utils/filters';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const cuisines = {
  American: 109,
  Hawaiian: 79,
  Sushi: 73,
  Asian: 71,
  Japanese: 74,
  Seafood: 107,
  'Healthy Food': 36,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rests: [],
      filteredRests: [],
    };
  }

  componentDidMount() {
    this.updateRests();
  }

  updateRests = () => {
    getRestaurants()
      .then(res => this.setState({
        rests: res.data,
        filteredRests: res.data,
      }))
      .catch(err => console.log(err));
  };

  filterRests = (filterType, value) => {
    let updatedRests = this.state.rests;
    updatedRests = filterRests(updatedRests, filterType, value);
    this.setState({ filteredRests: updatedRests });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Banner
            filterRests={this.filterRests}
            cuisines={cuisines}
            updateRests={this.updateRests}
          />
          <div className="restaurants-container">
            <RestaurantsList rests={this.state.filteredRests} cuisines={cuisines}/>
            <Map />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
