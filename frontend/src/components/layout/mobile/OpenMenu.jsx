import React from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function OpenMenu(props) {
  return (
    <div className="mobile-menu-button shadow" onClick={props.function}>
      <FontAwesomeIcon icon={faBars}/>
    </div>
  );
}

export default OpenMenu;