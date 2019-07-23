import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux'

// Component Imports
import CardHeader from './CardHeader';

class NextBillCard extends Component {

  render() {

    if(this.props.bill[0] === undefined) {
      return(
        <div className="card-25 shadow">
          <CardHeader heading="Next Bill Due:"/>
          <h2>Loading...</h2>
          <p>...</p>
          <p>...</p>
        </div>
      )
    }

    return(
      <div className="card-25 shadow">
        <CardHeader heading="Next Bill Due:"/>
        <h2>{this.props.bill[0].name}</h2>
        <p>{this.props.bill[0].formatted_amount_due}</p>
        <p>{this.props.bill[0].formatted_date_due}</p>
        <p>Category: Other</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bill: state.bills.bills
})

export default connect(mapStateToProps)(NextBillCard);