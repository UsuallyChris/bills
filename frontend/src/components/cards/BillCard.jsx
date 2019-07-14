import React, { Component } from 'react';

// Redux Imports 
import { connect } from 'react-redux';
import { deleteBill, updateBill } from '../../actions/bills';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faWindowClose, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

// Date Picker Import
//import parseISO from 'date-fns/parse/index';

// Formik and Yup Imports
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Datepicker } from 'react-formik-ui';
import * as Yup from 'yup';

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
  }
  
  componentDidMount() {
    this.setState({
      name: this.props.name,
      date_due: this.props.date_due,
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

  BillSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, 'Length must be at least one character.')
      .required('Name is required.'),
    date_due: Yup.date()
      .typeError('Due Date must be a date.')
      .min(new Date().getFullYear(), 'Due Date must be at least this year.')
      .max(new Date('December 31, 2999'), 'Due Date must be in this century.')
      .required('Due Date is required.'),
    amount_due: Yup.number()
      .typeError('Amount Due must be a number.')
      .positive('Amount Due must be a positive number.')
      .required('Amount Due is required.')
  })

  render() {

    if(this.state.editing) {
      return (
        <div className="bill-card card-shadow">
          <Formik
            initialValues={{
              id: this.state.id,
              name: this.state.name,
              date_due: this.state.date_due,
              amount_due: this.state.amount_due
            }}
            validationSchema={this.BillSchema}
            onSubmit={(values, { setSubmitting }) => {
              const { name, date_due, amount_due } = values;
              const bill = { name, date_due, amount_due };
              this.props.updateBill(values.id, bill);
              setSubmitting(false);
              this.toggleEditing();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="edit-card-content">
                <div className="editing">
                  <div className="h2-input">
                    <Field type="text" name="name"/>
                    <ErrorMessage name="name" />
                  </div>
                  <div className="p-input">
                    <Datepicker 
                      name="date_due"
                      dateFormat="MMMM dd, yyyy"
                    />
                    <ErrorMessage name="date_due" />
                  </div>
                  <div className="p-input">
                    <Field type="text" name="amount_due"/>
                    <ErrorMessage name="amount_due" />
                  </div>
                </div>
                <div className="card-buttons">
                  <button onClick={this.toggleEditing}><FontAwesomeIcon className="cancel-edit-button" icon={faWindowClose}/></button>
                  <button type="submit" disabled={isSubmitting}><FontAwesomeIcon className="accept-edit-button" icon={faCheckCircle}/></button>
                </div>
              </Form>
            )}
          </Formik>
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