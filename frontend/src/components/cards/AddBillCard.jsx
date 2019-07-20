import React from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { addBill } from '../../actions/bills';

// Formik and Yup Imports
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Datepicker } from 'react-formik-ui';
import  * as Yup from 'yup';

// Component Imports
import CardHeader from './CardHeader';

const BillSchema = Yup.object().shape({
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
    .required('Amount Due is required.'),
  category: Yup.string()
    .required('Choose a category.')
})

function AddBillCard(props) {
  return(
    <Formik
      initialValues={{
        name: '',
        date_due: '',
        amount_due: '',
        category: ''
      }}
      validationSchema={BillSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const { name, date_due, amount_due } = values;
        const bill = { name, date_due, amount_due };
        props.addBill(bill);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
          <div className="card-50 shadow">
            <CardHeader heading="Add New Bill:" />
            <Form>
              <div className="card-content">
                <div className="input-wrapper">
                  <Field type="text" name="name" placeholder="Name" />
                  <ErrorMessage name="name" render={msg => <span className="error-message">{msg}</span>}/>
                </div>
                <div className="input-wrapper">
                  <Datepicker
                    name="date_due"
                    placeholder="Date Due"
                    dateFormat="MMMM, dd yyyy"
                    minDate={new Date()}
                  />
                  <ErrorMessage name="date_due" render={msg => <span className="error-message">{msg}</span>}/>
                </div>
                <div className="input-wrapper">
                  <Field type="text" name="amount_due" placeholder="Amount Due" />
                  <ErrorMessage name="amount_due" render={msg => <span className="error-message">{msg}</span>}/>
                </div>
                <div className="input-wrapper">
                  <Field component="select" name="category" style={{color: '#D1C4E9'}}>
                    <option value="" disabled selected hidden>Select Category...</option>
                    <option value="utilities">Utilities</option>
                    <option value="credit_card">Credit Card</option>
                    <option value="home">Home</option>
                    <option value="education">Education</option>
                    <option value="vehicle">Vehicle</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage name="category" render={msg => <span className="error-message">{msg}</span>}/>
                </div>
              </div>
              <div className="add-card-buttons">
                <button type="submit" className="submit-button" disabled={isSubmitting}>Add Bill</button>
              </div>
            </Form>
        </div>
      )}
    </Formik>
  ); 
}

export default connect(null, { addBill })(AddBillCard);