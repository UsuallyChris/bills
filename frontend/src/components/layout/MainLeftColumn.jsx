import React from 'react';

// Component Imports
import TotalCard from '../cards/TotalCard';
import AddBillCard from '../cards/AddBillCard';

function MainLeftColumn() {
  return(
    <div className="main-left-column">
      <TotalCard />
      <TotalCard />
      <AddBillCard />
    </div>
  );
}

export default MainLeftColumn;