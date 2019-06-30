import React, { Component } from 'react';

// Redux Imports 
import { connect } from 'react-redux';
import { deleteBill, updateBill } from '../../actions/bills';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faWindowClose, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

// Date Picker Import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import parseISO from 'date-fns/parse/index';

class BillCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date_due: '',
      amount_due: '',
      id: '',
      editing: false
    }

    this.toggleEditing = this.toggleEditing.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      name: this.props.name,
      date_due: parseISO(this.props.date_due.toString().substring(0, 10)),
      amount_due: this.props.amount_due,
      id: this.props.id
    })
  }

  toggleEditing() {
    if(this.state.editing === false) {
      this.setState({
        editing: true
      });
    } else {
      this.setState({
        editing: false
      })
    }
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

  submitEdit(e) {
    e.preventDefault();
    const { name, date_due, amount_due } = this.state;
    const bill = { name, date_due, amount_due };
    this.props.updateBill(this.state.id, bill);
    this.toggleEditing();
  }

  render() {

    if(this.state.editing) {
      return (
        <div className="bill-card card-shadow">
          <form className="card-content editing">
            <div className="input-wrapper h2-input">
              <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
              <span className="input-border-bottom"></span>
            </div>
            <div className="input-wrapper p-input">
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
            <div className="input-wrapper p-input">
              <input type="text" name="amount_due" onChange={this.onChange} value={this.state.amount_due}/>
              <span className="input-border-bottom"></span>
            </div>
          </form>
          <div className="card-buttons">
            <button onClick={this.toggleEditing}><FontAwesomeIcon className="cancel-edit-button" icon={faWindowClose}/></button>
            <button onClick={this.submitEdit}><FontAwesomeIcon className="accept-edit-button" icon={faCheckCircle}/></button>
          </div>
        </div>
      );
    }

    return (
      <div className="bill-card card-shadow">
        <div className="card-content">
          <h2>{this.props.name}</h2>
          <p>{this.props.formatted_date_due}</p>
          <p>{this.props.formatted_amount_due}</p>
        </div>
        <div className="card-buttons">
          <button onClick={this.toggleEditing}><FontAwesomeIcon className="edit-button" icon={faEdit}/></button>
          <button className="delete-button-container" onClick={this.props.deleteBill.bind(this, this.props.id)}><FontAwesomeIcon className="delete-button" icon={faTrashAlt}/></button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  bills: state.bills.bills
})

export default connect(mapStateToProps, { deleteBill, updateBill })(BillCard);