import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { getBills } from '../../actions/bills';

// Component Imports
import BillCard from '../cards/BillCard';

class Gutter extends Component{

  componentDidMount() {
    this.props.getBills();
  }
  
  render() {
    return(
      <div className="gutter">
        <div className="gutter-card-container">
          {this.props.bills.map(bill => (
            <BillCard
              key={bill._id}
              name={bill.name}
              date_due={bill.formatted_date_due}
              amount_due={bill.formatted_amount_due}
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