import React from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function CloseMenu(props) {
  return (
    <div className="mobile-menu-button shadow" onClick={props.function}>
      <FontAwesomeIcon icon={faTimes}/>
    </div>
  );
}

export default CloseMenu;