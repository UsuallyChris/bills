import React, { Component } from 'react';
import './css/Normalize.css';
import './css/App.css';

// Redux Imports
import { Provider } from 'react-redux';
import store from './store';

// Component Imports
import Gutter from './components/layout/Gutter';
import Main from './components/layout/Main';

// React Router Imports
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Mobile Component Imports
import MobileHome from './components/layout/mobile/MobileHome';
import MobileAddBill from './components/layout/mobile/MobileAddBill';
import MobileBills from './components/layout/mobile/MobileBills';
import MobileCategories from './components/layout/mobile/MobileCategories';

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
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={MobileHome}/>
              <Route path='/bills' component={MobileBills}/>
              <Route path='/add' component={MobileAddBill}/>
              <Route path ='/categories' component={MobileCategories}/>
            </Switch>
          </BrowserRouter>
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
