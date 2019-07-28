import React, { Component } from 'react';

// Component Imports
import OpenMenu from './OpenMenu';
import CloseMenu from './CloseMenu';

// React Router Imports
import { Link } from 'react-router-dom';

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
          <div className="menu-links">
            <Link to="/">Home</Link>
            <Link to="/bills">Bills</Link>
            <Link to="/add">Add Bill</Link>
            <Link to="/categories">Categories</Link>
          </div>
          <CloseMenu function={this.closeMenu}/>
        </div>
        <OpenMenu function={this.openMenu}/>
      </div>
    );
  }
}

export default MobileMenu;