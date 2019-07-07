import React , { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { addBill } from '../../actions/bills';

// Date Picker Import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class FormikAddBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date_due: '',
      amount_due: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date_due: date
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
      <div className="add-bill-card add-bill-shadow">
        <form onSubmit={this.onSubmit}>
          <div className="card-content">
            <div className="input-wrapper">
              <input type="text" name="name" placeholder="Name" onChange={this.onChange} value={this.state.name}/>
              <span className="input-border-bottom"></span>
            </div>             
            <div className="input-wrapper">
              <DatePicker
                selected={this.state.date_due} 
                placeholderText='Date Due'
                minDate={new Date()}
                allowSameDay={true}
                onChange={this.onChangeDate}
                value={this.state.date_due}
              />
              <span className="input-border-bottom"></span>
            </div> 
            <div className="input-wrapper">
              <input type="text" name="amount_due" placeholder="Amount Due" onChange={this.onChange} value={this.state.amount_due}/>
              <span className="input-border-bottom"></span>
            </div>  
          </div>
          <div className="add-card-buttons">
            <input type="submit" value="Add Bill"/>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addBill })(FormikAddBill);