import React from 'react';

// Component Imports
import MainLeftColumn from './MainLeftColumn';
import MainRightColumn from './MainRightColumn';

function Main() {
  return(
    <div className="main">
      <MainLeftColumn />
      <MainRightColumn />
    </div>
  );
};

export default Main;