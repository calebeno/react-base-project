import React from 'react';
import {render} from 'react-dom';
import Counter from './components/counter/counter.jsx';
import Hello from './components/hello/hello.jsx';
import './app.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <Hello />
        <Counter />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
