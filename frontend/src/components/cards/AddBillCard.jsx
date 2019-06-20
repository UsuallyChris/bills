import React , { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { addBill } from '../../actions/bills';

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

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, date_due, amount_due } = this.state;
    const bill = { name, date_due, amount_due };
    this.props.addBill(bill);
    this.setState({
      name: '',
      date_due: '',
      amount_due: ''
    })
  }

  render() {
    return(
      <div className="bill-card card-shadow">
        <form onSubmit={this.onSubmit}>
          <div className="card-content">
            <div className="input-wrapper">
              <input type="text" name="name" placeholder="Name" onChange={this.onChange} value={this.state.name}/>
              <span className="input-border-bottom"></span>
            </div>  
            <div className="input-wrapper">
              <input type="text" name="amount_due" placeholder="Amount Due" onChange={this.onChange} value={this.state.amount_due}/>
              <span className="input-border-bottom"></span>
            </div>  
            <div className="input-wrapper">
              <input type="text" name="date_due" placeholder="Date Due" onChange={this.onChange} value={this.state.date_due}/>
              <span className="input-border-bottom"></span>
            </div>  
          </div>
          <div className="card-buttons">
            <input type="submit" value="Add Bill"/>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addBill })(AddBillCard);