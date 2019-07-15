import React from 'react';

// Component Imports
import TotalCard from '../cards/TotalCard';
import NextBillCard from '../cards/NextBillCard';
import AddBillCard from '../cards/AddBillCard';

function MainLeftColumn() {
  return(
    <div className="main-left-column">
      <TotalCard />
      <NextBillCard />
      <AddBillCard />
    </div>
  );
}

export default MainLeftColumn;