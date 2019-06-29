import React, { Component } from 'react';

// Redux Imports 
import { connect } from 'react-redux';
import { deleteBill } from '../../actions/bills';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

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

    this.toggleEditingOn = this.toggleEditingOn.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      name: this.props.name,
      date_due: this.props.date_due,
      amount_due: this.props.amount_due,
      id: this.props.id
    })
  }

  toggleEditingOn() {
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

  render() {

    if(this.state.editing) {
      return (
        <div className="bill-card card-shadow">
          <form className="card-content">
            <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
            <input type="text" name="date_due" onChange={this.onChange} value={this.state.date_due}/>
            <input type="text" name="amount_due" onChange={this.onChange} value={this.state.amount_due}/>
          </form>
          <div className="card-buttons">
            <button onClick={this}><FontAwesomeIcon className="edit-button" icon={faEdit}/></button>
            <button className="delete-button-container" onClick={this.props.deleteBill.bind(this, this.props.id)}><FontAwesomeIcon className="delete-button" icon={faTrashAlt}/></button>
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
          <button onClick={this.toggleEditingOn}><FontAwesomeIcon className="edit-button" icon={faEdit}/></button>
          <button className="delete-button-container" onClick={this.props.deleteBill.bind(this, this.props.id)}><FontAwesomeIcon className="delete-button" icon={faTrashAlt}/></button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  bills: state.bills.bills
})

export default connect(mapStateToProps, { deleteBill })(BillCard);