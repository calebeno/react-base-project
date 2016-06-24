import React from 'react';
import {render} from 'react-dom';
import Hello from './components/hello/hello.jsx';
import {Router, Route, Link, browserHistory, RouteHandler} from 'react-router'
import './app.css';

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <Hello />
//         <Counter />
//       </div>
//     );
//   }
// }

class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <span>Header:</span>
                <hr/>
                <div>
                    <h2>Body Content</h2>
                    {this.props.children}
                </div>
                <div>
                    <hr/>
                    footer
                </div>
            </div>
        );
    }
}


render((
    <Router>
        <Route component={MainLayout}>
            <Route path="/" component={Hello}/>
        </Route>
    </Router>
), document.getElementById('app'));


// render(<App/>, document.getElementById('app'));
