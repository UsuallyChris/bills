import React from 'react';

// Component Imports
import MobileContainer from './MobileContainer';
import AddBillCard from '../../cards/AddBillCard';

function MobileAddBill(props) {
  return(
    <MobileContainer>
      <AddBillCard />
    </MobileContainer>
  )
}

export default MobileAddBill;