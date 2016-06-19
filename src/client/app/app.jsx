import React from 'react';
import {render} from 'react-dom';
import AwesomeCounter from './components/counter/awesome-counter.jsx';
import './app.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello Caleb!</p>
        <AwesomeCounter />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
