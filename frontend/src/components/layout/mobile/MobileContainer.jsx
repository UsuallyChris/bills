import React from 'react';

function MobileContainer(props) {
  return(
    <div className="mobile-container">
      {props.children}
    </div>
  );
}

export default MobileContainer;