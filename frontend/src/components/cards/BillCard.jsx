import React, { Component } from 'react';

class BillCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="bill-card card-shadow">
        <div className="card-content">
          <h2>{this.props.name}</h2>
          <p>{this.props.date_due}</p>
          <p>{this.props.amount_due}</p>
        </div>
        <div className="card-buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );
  };
};

export default BillCard;