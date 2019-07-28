import React from 'react';

// Component Imports
import MobileMenu from './MobileMenu';

function MobileContainer(props) {
  return(
    <div>
      <div className="mobile-container" style={{width: '100vw'}}>
        {props.children}
      </div>
      <MobileMenu />
    </div>
  );
}

export default MobileContainer;