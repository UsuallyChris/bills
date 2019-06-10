import React from 'react';
import './css/Normalize.css';
import './css/App.css';

// Component Imports
import Gutter from './components/layout/Gutter';
import Main from './components/layout/Main';

function App() {
  return (
    <div className="app-wrapper">
      <Gutter />
      <Main />
    </div>
  );
}

export default App;
