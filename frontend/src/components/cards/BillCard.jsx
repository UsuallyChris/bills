import React, { Component } from 'react';

class BillCard extends Component {

  render() {
    return (
      <div className="bill-card card-shadow">
        <h2>{this.props.name}</h2>
        <p>{this.props.date_due}</p>
        <p>{this.props.amount_due}</p>
      </div>
    );
  };
};

export default BillCard;