import React, { Component } from 'react';

// Redux Imports 
import { connect } from 'react-redux';
import { deleteBill } from '../../actions/bills';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faWindowClose, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

class BillCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date_due: '',
      amount_due: '',
      id: '',
      formatted_date_due: '',
      formatted_amount_due: '',
      editing: false
    }

    this.toggleEditing = this.toggleEditing.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      name: this.props.name,
      date_due: this.props.date_due.toString().substring(0, 10),
      amount_due: this.props.amount_due,
      formatted_date_due: this.props.formatted_date_due,
      formatted_amount_due: this.props.formatted_amount_due,
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
              <input type="text" name="date_due" onChange={this.onChange} value={this.state.date_due}/>
              <span className="input-border-bottom"></span>
            </div>
            <div className="input-wrapper p-input">
              <input type="text" name="amount_due" onChange={this.onChange} value={this.state.amount_due}/>
              <span className="input-border-bottom"></span>
            </div>
          </form>
          <div className="card-buttons">
            <button onClick={this.toggleEditing}><FontAwesomeIcon className="cancel-edit-button" icon={faWindowClose}/></button>
            <button onClick={this.props.deleteBill.bind(this, this.props.id)}><FontAwesomeIcon className="accept-edit-button" icon={faCheckCircle}/></button>
          </div>
        </div>
      );
    }

    return (
      <div className="bill-card card-shadow">
        <div className="card-content">
          <h2>{this.state.name}</h2>
          <p>{this.state.formatted_date_due}</p>
          <p>{this.state.formatted_amount_due}</p>
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

export default connect(mapStateToProps, { deleteBill })(BillCard);