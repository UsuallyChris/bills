import React from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { addBill } from '../../actions/bills';

// Formik and Yup Imports
import { Formik, Form, Field } from 'formik';
import { Datepicker } from 'react-formik-ui';
import  * as Yup from 'yup';

const BillSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Length must be at least one character.')
    .required('Name is required.'),
  date_due: Yup.date()
    .required('Due Date is required.'),
  amount_due: Yup.number()
    .positive('Amount Due must be a positive number.')
    .required('Amount Due is required.')
})

function AddBillCard(props) {
  return(
    <Formik
      initialValues={{
        name: '',
        date_due: '',
        amount_due: ''
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
      {({ isSubmitting, errors, touched }) => (
            <div className="add-bill-card add-bill-shadow">
              <Form>
                <div className="card-content">
                  <Field type="text" name="name" placeholder="Name" />      
                  <Datepicker
                    name='date_due'
                    placeholder='Date Due'
                    minDate={new Date()}
                    allowSameDay={true}
                    dateFormat="MMMM d, yyyy"
                    strictParsing
                  />
                  <Field type="text" name="amount_due" placeholder="Amount Due" />
                </div>
                <div className="add-card-buttons">
                  <button type="submit" className="submit-button" disabled={isSubmitting}>Add Bill</button>
                </div>
                {errors.name && touched.name ? console.log(errors.name) : null}
              </Form>
          </div>
      )}
    </Formik>
  ); 
}

export default connect(null, { addBill })(AddBillCard);