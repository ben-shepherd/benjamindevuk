import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// Redux
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// Routes
import Routes from './routes'

// Sections
import Sidebar from './components/sidebar'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="site-wrapper">
              <div className="app-sidebar">
                <Sidebar />
              </div>
              <div className="app-content d-flex">
                <Routes />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(App);
