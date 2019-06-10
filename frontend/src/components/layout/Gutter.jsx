import React, { Component } from 'react';
import axios from 'axios';

// Component Imports
import BillCard from '../cards/BillCard';

class Gutter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    }
    
    this.getBills = this.getBills.bind(this);
  };

  componentDidMount() {
    this.getBills();
  }

  getBills() {
    axios.get('http://localhost:5000/api/bills/')
      .then(res => {
        console.log(res.data);
        this.setState({
          bills: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  
  render() {
    return(
      <div className="gutter">
        {this.state.bills.map(bill => (
          <BillCard
            key={bill._id}
            name={bill.name}
            date_due={bill.formatted_date_due}
            amount_due={bill.formatted_amount_due}
          />
        ))}
      </div>
    );
  } 
};

export default Gutter;