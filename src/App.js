import React, { Component } from 'react';
import './App.css';
import MapView from './MapView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Take A Hike</h1>
        </header>
        <div>
          <MapView />
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
