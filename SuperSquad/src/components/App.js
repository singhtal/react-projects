import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './App.css';
import Characterlist from './characterList';
import Herolist from './Herolist';
import Squatstats from './Squatstats';

class App extends Component {
  render(){
    return <div className="App">
      <h2>Super Squad</h2>
      <div className="col-md-4">
        <Characterlist />
      </div>
      <div className="col-md-4">
        <Herolist />
      </div>
      <div className="col-md-4">
        <Squatstats />
      </div>
    </div>
  }
}

export default App;
