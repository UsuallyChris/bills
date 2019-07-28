import React, { Component } from 'react';

// Component Imports
import OpenMenu from './OpenMenu';

class MobileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '0vw'
    }

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.setState({
      width: '100vw'
    })
  }

  closeMenu() {
    this.setState({
      width: '0vw'
    })
  }

  render() {
    return(
      <div>
        <div className="mobile-menu" style={{width: this.state.width}}>
          <h1>Menu</h1>
        </div>
        <OpenMenu function={this.openMenu}/>
      </div>
    );
  }
}

export default MobileMenu;