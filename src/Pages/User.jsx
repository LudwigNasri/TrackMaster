import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import PageHead from '../components/PageHead'

function Users() {

  const initialValues = {
    senderName: '', // Name of the sender
    senderAddress: '', // Sender's address
    recipientName: '', // Name of the recipient
    recipientAddress: '', // Recipient's address
  };
  
   const handleFormSubmit = (values) => {
      console.log(values)
    }

  const userSchema = yup.object().shape({
        senderName: yup.string().required('Sender name is required'),
        senderAddress: yup.string().required('Sender address is required'),
        recipientName: yup.string().required('Recipient name is required'),
        recipientAddress: yup.string().required('Recipient address is required'),
  })


  return (
    <div className='Package'>
      <PageHead title='ADD SHIPMENT' subtitle='Add A New Shipment'/>

      <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              type="text"
              name="senderName"
              placeholder="Sender Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.senderName}
              className={`form-control ${
                errors.senderName && touched.senderName ? "input-error" : ""
              }`}
            />
            {errors.senderName && touched.senderName && (
              <p className="error-message">{errors.senderName}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="senderAddress"
              placeholder="Sender Address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.senderAddress}
              className={`form-control ${
                errors.senderAddress && touched.senderAddress ? "input-error" : ""
              }`}
            />
            {errors.senderAddress && touched.senderAddress && (
              <p className="error-message">{errors.senderAddress}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="recipientName"
              placeholder="Recipient Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.recipientName}
              className={`form-control ${
                errors.recipientName && touched.recipientName ? "input-error" : ""
              }`}
            />
            {errors.recipientName && touched.recipientName && (
              <p className="error-message">{errors.recipientName}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="recipientAddress"
              placeholder="Recipient Address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.recipientAddress}
              className={`form-control ${
                errors.recipientAddress && touched.recipientAddress ? "input-error" : ""
              }`}
            />
            {errors.recipientAddress && touched.recipientAddress && (
              <p className="error-message">{errors.recipientAddress}</p>
            )}
          </div>

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      )}
    </Formik>

      </div>
  )
}

export default Users