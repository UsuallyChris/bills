import React, { Component } from 'react';

// Redux Imports 
import { connect } from 'react-redux';
import { deleteBill } from '../../actions/bills';

class BillCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date_due: '',
      amount_due: '',
      id: ''
    }
  }
  
  componentDidMount() {
    this.setState({
      name: this.props.name,
      date_due: this.props.date_due,
      amount_due: this.props.amount_due,
      id: this.props.id
    })
  }

  render() {
    return (
      <div className="bill-card card-shadow">
        <div className="card-content">
          <h2>{this.props.name}</h2>
          <p>{this.props.formatted_date_due}</p>
          <p>{this.props.formatted_amount_due}</p>
        </div>
        <div className="card-buttons">
          <button>Edit</button>
          <button onClick={this.props.deleteBill.bind(this, this.props.id)}>Delete</button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  bills: state.bills.bills
})

export default connect(mapStateToProps, { deleteBill })(BillCard);