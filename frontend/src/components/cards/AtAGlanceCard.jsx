import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';

// Component Imports
import CardHeader from './CardHeader';

class AtAGlanceCard extends Component {
  render() {

    // Formatting for money
    const formattedAmountDue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    // Calculate Total
    let total = 0;
    this.props.bill.map(bill => {
      return total += bill.amount_due
    })

    if(this.props.bill[0] === undefined) {
      return(
        <div className="card-25 shadow">
          <CardHeader heading="At A Glance:"/>
          <div className="glance-wrapper-total">
            <h2>Total Due:</h2>
            <p>{formattedAmountDue.format(total)}</p>
          </div>
          <h2>Next Bill Due:</h2>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      )
    }

    return(
      <div className="card-25 shadow">
        <CardHeader heading="At A Glance:"/>
        <div className="glance-wrapper">
          <div className="glance-column">
            <h2>Total Due:</h2>
            <p>{formattedAmountDue.format(total)}</p>
          </div>
          <div className="glance-column">
            <h2>Next Bill Due:</h2>
            <p>{this.props.bill[0].name}</p>
            <p>{this.props.bill[0].formatted_date_due}</p>
            <p>{this.props.bill[0].formatted_amount_due}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bill: state.bills.bills
})

export default connect(mapStateToProps)(AtAGlanceCard);