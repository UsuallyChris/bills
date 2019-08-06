import React from 'react';

// Component Imports
import AtAGlanceCard from '../cards/AtAGlanceCard';
import AddBillCard from '../cards/AddBillCard';

function MainLeftColumn() {
  return(
    <div className="main-left-column">
      <AtAGlanceCard />
      <AddBillCard />
    </div>
  );
}

export default MainLeftColumn;