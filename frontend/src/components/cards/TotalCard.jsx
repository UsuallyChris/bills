import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';

class TotalCard extends Component {

  render() {

    const formattedAmountDue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    let total = 0;
    this.props.bills.map(bill => {
      return total += bill.amount_due
    })

    return(
      <div className="total-card">
        <h1>{formattedAmountDue.format(total)}</h1>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  bills: state.bills.bills
})

export default connect(mapStateToProps)(TotalCard);