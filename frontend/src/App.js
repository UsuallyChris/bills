import React from 'react';
import './css/Normalize.css';
import './css/App.css';

// Redux Imports
import { Provider } from 'react-redux';
import store from './store';

// Component Imports
import Gutter from './components/layout/Gutter';
import Main from './components/layout/Main';

function App() {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Gutter />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
