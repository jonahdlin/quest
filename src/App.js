import React, { Component } from 'react';
import img from './resources/millpond.png';
import initLocations from './constants/locations';
import InteractiveMap from './components/InteractiveMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: initLocations,
      flashCorrect: false,
      flashIncorrect: false,
    };
  }

  guess = (str) => {
    let wasMatch = false;
    this.setState({locations: this.state.locations.map(loc => {
      const match = loc.caseSensitive
        ? loc.key === str
        : loc.key.toLowerCase() === str.toLowerCase();
      if (match) {
        loc.revealed = true;
        wasMatch = true;
      }
      return loc;
    }) });

    if (wasMatch) this.setState({ flashCorrect: true, flashIncorrect: false })
    else this.setState({ flashCorrect: false, flashIncorrect: true })
  }

  handleFlashFinish = () => this.setState({ flashCorrect: false, flashIncorrect: false });

  render() {
    return (
      <div className="App">
        <InteractiveMap
          img={img}
          guess={this.guess}
          locations={this.state.locations}
          flashCorrect={this.state.flashCorrect}
          flashIncorrect={this.state.flashIncorrect}
          onFlashFinish={this.handleFlashFinish}
        />
      </div>
    );
  }
}

export default App;
