import React from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { addBill } from '../../actions/bills';

// Formik Imports
import { Formik, Form, Field } from 'formik';

function FormikAddBill(props) {
  return(
    <Formik
      initialValues={{
        name: '',
        date_due: '',
        amount_due: ''
      }}
      onSubmit={(values, { setSubmitting }) => {
        const { name, date_due, amount_due } = values;
        const bill = { name, date_due, amount_due };
        props.addBill(bill);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
            <div className="add-bill-card add-bill-shadow">
              <Form>
                <div className="card-content">
                  <div className="input-wrapper">
                    <Field type="text" name="name" placeholder="Name" />
                    <span className="input-border-bottom"></span>
                  </div>             
                  <div className="input-wrapper">
                    <Field type="text" name="date_due" placeholder="Date Due" />
                    <span className="input-border-bottom"></span>
                  </div> 
                  <div className="input-wrapper">
                    <Field type="text" name="amount_due" placeholder="Amount Due" />
                    <span className="input-border-bottom"></span>
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

export default connect(null, { addBill })(FormikAddBill);