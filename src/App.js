
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'
import SelectClass from './components/MainPanel/Landing'
import MainPanel from './components/MainPanel/MainPanel'
import SidePanel from './components/SidePanel/SidePanel'
export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid o-flow">
          <Router>
          <div className="row">
            <div className="col-md-2 no-padding">
              <SidePanel />
            </div>
            <div className="col-md-10 no-padding">
              <Route exact path="/" component={SelectClass} /> 
              <Route exact path="/class" component={MainPanel} />
            </div>      
          </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

