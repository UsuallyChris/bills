import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';

// Recharts Imports
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, Tooltip } from 'recharts';

class CategoryGraph extends Component {

  render() {

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
    });

    let data = [
      {name: 'Util.', total: utilities},
      {name: 'Credit', total: credit},
      {name: 'Home', total: home},
      {name: 'Edu.', total: education},
      {name: 'Vehicle', total: vehicle},
      {name: 'Other', total: other},
      ]

    return(
      <div className="category-container">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{top: 0, bottom: 0, left: 0, right: 0}}
          >
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#673AB7"/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bills: state.bills.bills
})

export default connect(mapStateToProps)(CategoryGraph);