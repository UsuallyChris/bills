import React from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function OpenMenu(props) {
  return (
    <button className="open-menu shadow" onClick={props.function}>
      <FontAwesomeIcon icon={faBars}/>
    </button>
  );
}

export default OpenMenu;