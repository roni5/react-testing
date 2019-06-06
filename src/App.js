import React, { Component } from 'react';
import Quakes from './components/Quakes';
import EmptyList from './components/EmptyList';
import Filter from './components/Filter';
import CheckboxWithLabel from './components/link/CheckboxWithLabel';
import Link from './components/link/Link.react';
import logo from './logo.svg';
import './App.css';
import { fetchEarth, parseQuakes } from './service/fetchEarth';

class App extends Component {
  constructor() {
    super();
    this.allQuakes = [];
    this.state = { quakes: [] };
    this.cacheQuakes = this.cacheQuakes.bind(this);
    this.setQuakes = this.setQuakes.bind(this);
  }

  componentDidMount() {
    fetchEarth()
      .then(parseQuakes)
      .then(quakes => {
        this.cacheQuakes(quakes);
        this.setQuakes(quakes);
      })
      .catch(this.handleError);
  }

  cacheQuakes(quakes) {
    this.allQuakes = quakes.map(x => x);
  }

  setQuakes(quakes) {
    this.setState({ quakes });
  }

  handleError(error) {
    console.log(error);
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <CheckboxWithLabel />
          </header>
          <div>
            <Link />
            <h2>Filter Earthquakes Magnitude </h2>
            <h3>and types of Magnitude</h3>
            <p>md = Based on the duration of shaking</p>
            <p>ml = based on the maximum amplitude</p>
          </div>
        </div>
        <div className="App-body">
          <Filter
            filterName="mag"
            allQuakes={this.allQuakes}
            listedQuakes={this.state.quakes}
            setQuakes={this.setQuakes}
          />
          <Filter
            filterName="magType"
            allQuakes={this.allQuakes}
            listedQuakes={this.state.quakes}
            setQuakes={this.setQuakes}
          />
          <Quakes quakes={this.state.quakes} />
          <EmptyList quakes={this.state.quakes} />
        </div>
      </div>
    );
  }
}

export default App;
