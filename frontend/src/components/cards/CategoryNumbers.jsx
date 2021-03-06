import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';

class CategoryNumbers extends Component {

  render() {

    const formattedAmountDue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    let utilities = 0;
    let credit = 0;
    let home = 0;
    let education = 0;
    let vehicle = 0;
    let other = 0;
    this.props.bills.map(bill => {
      switch(bill.category) {
        case 'Utilities':
          return utilities += bill.amount_due;
        case 'Credit Card':
          return credit += bill.amount_due;
        case 'Home':
          return home += bill.amount_due;
        case 'Education':
          return education += bill.amount_due;
        case 'Vehicle':
          return vehicle += bill.amount_due;
        default:
          return other += bill.amount_due;
      }
    })

    return(
      <div className="category-container">
        <div className="number-wrapper">
          <h2>Utilities:</h2>
          <h2>{formattedAmountDue.format(utilities)}</h2>
        </div>
        <div className="number-wrapper">
          <h2>Credit Cards:</h2>
          <h2>{formattedAmountDue.format(credit)}</h2>
        </div>  
        <div className="number-wrapper">
          <h2>Home:</h2>
          <h2>{formattedAmountDue.format(home)}</h2>
        </div>  
        <div className="number-wrapper">
          <h2>Education:</h2>
          <h2>{formattedAmountDue.format(education)}</h2>
        </div>  
        <div className="number-wrapper">
          <h2>Vehicle:</h2>
          <h2>{formattedAmountDue.format(vehicle)}</h2>
        </div>  
        <div className="number-wrapper">
          <h2>Other:</h2>
          <h2>{formattedAmountDue.format(other)}</h2>
        </div>        
      </div>
    );

  }
}

const mapStateToProps = state => ({
  bills: state.bills.bills
})

export default connect(mapStateToProps)(CategoryNumbers);

