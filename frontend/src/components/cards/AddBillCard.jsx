import React , { Component } from 'react';
import axios from 'axios';

class AddBillCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date_due: '',
      amount_due: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  addBill(bill) {
    axios.post('http://localhost:5000/api/bills', bill)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err.response);
      })
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, date_due, amount_due } = this.state;
    const bill = { name, date_due, amount_due };
    this.addBill(bill);
  }

  render() {
    return(
      <div className="bill-card card-shadow">
        <form onSubmit={this.onSubmit}>
          <div className="card-content">
            <input type="text" name="name" placeholder="Name" onChange={this.onChange} value={this.state.name}/>
            <input type="text" name="amount_due" placeholder="Amount Due" onChange={this.onChange} value={this.state.amount_due}/>
            <input type="text" name="date_due" placeholder="Date Due" onChange={this.onChange} value={this.state.date_due}/>
          </div>
          <div className="card-buttons">
            <input type="submit" value="Add Bill"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBillCard;