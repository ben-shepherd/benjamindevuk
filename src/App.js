import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import './App.css';


// Redux
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// Routes
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Routes />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(App);
