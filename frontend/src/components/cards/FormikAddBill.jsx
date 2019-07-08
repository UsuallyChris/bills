import React from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { addBill } from '../../actions/bills';

// Formik Imports
import { Formik, Form, Field } from 'formik';
import { Datepicker } from 'react-formik-ui';

function FormikAddBill(props) {
  return(
    <Formik
      initialValues={{
        name: '',
        date_due: '',
        amount_due: ''
      }}
      onSubmit={(values, { setSubmitting, setValues }) => {
        const { name, date_due, amount_due } = values;
        const bill = { name, date_due, amount_due };
        props.addBill(bill);
        setValues({
          name: '',
          date_due: '',
          amount_due: ''
        })
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
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
              </Form>
          </div>
      )}
    </Formik>
  ); 
}

export default connect(null, { addBill })(FormikAddBill);