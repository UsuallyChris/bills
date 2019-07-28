import React, { Component } from 'react';
import './css/Normalize.css';
import './css/App.css';

// Redux Imports
import { Provider } from 'react-redux';
import store from './store';

// Component Imports
import Gutter from './components/layout/Gutter';
import Main from './components/layout/Main';

import {} from 'react-router-dom';

// Mobile Component Imports
import MobileAddBill from './components/layout/mobile/MobileAddBill';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {

    const { width } = this.state;

    if(width < 1500) {
      return(
        <Provider store={store}>
          <MobileAddBill />
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <div className="app-wrapper">
            <Gutter />
            <Main />
          </div>
        </Provider>
      );
    }
  }
}

export default App;
