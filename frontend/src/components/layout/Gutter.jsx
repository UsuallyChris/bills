import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { getBills } from '../../actions/bills';

// Component Imports
import BillCard from '../cards/BillCard';
//import AddBillCard from '../cards/AddBillCard';
import FormikAddBill from '../cards/FormikAddBill';

class Gutter extends Component{

  componentDidMount() {
    this.props.getBills();
  }
  
  render() {
    return(
      <div className="gutter">
        <div className="gutter-card-container">
          <FormikAddBill />
          {this.props.bills.map(bill => (
            <BillCard
              key={bill._id}
              id={bill._id}
              name={bill.name}
              date_due={bill.date_due}
              formatted_date_due={bill.formatted_date_due}
              amount_due={bill.amount_due}
              formatted_amount_due={bill.formatted_amount_due}
            />
          ))}
        </div>
      </div>
    );
  } 
};

const mapStateToProps = state => ({
  bills: state.bills.bills,
})

export default connect(mapStateToProps, { getBills })(Gutter);