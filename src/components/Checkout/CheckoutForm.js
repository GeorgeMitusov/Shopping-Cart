import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/Context';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import Select from 'react-select';

import '../../styles/Checkout/CheckoutForm.scss';

const CheckoutForm = () => {

  const { cart, setOrderSuccess } = useContext(Context); 

  const initialValues = {
    fullName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
  };

  const [ countryOptions, setCountryOptions ] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        const options = data.map((country) => ({
          value: country.cca2,
          label: country.name.common,
        }));
        setCountryOptions(options);
      });
  }, []);
  
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip is required'),
    country: Yup.string().required('Country is required'),
    phone: Yup.string().required('Phone is required'),
  });

  // const cartItem = cart.map( ( i, id ) => (
  //   <section key={id}>

  //     <div>
  //       <h1> { i.title } </h1>
  //       <h4> PRICE:  ${ i.price.toFixed(0) } </h4>
  //     </div>

  //     <div>
  //       QUANTITY: 
  //       { i.qty }
  //     </div>

  //     <p> { i.description } </p>

  //   </section>
  // ))

  const onSubmit = (values, { setSubmitting, resetForm }) => {

    const cartItem = cart.map((item) => {

      return `
        <section>
          <div>
            <h1>${item.title}</h1>
            <h4>PRICE: $${item.price.toFixed(0)}</h4>
          </div>
          <div>
            QUANTITY: ${item.qty}
          </div>
          <p>${item.description}</p>
        </section>
      `;
    }).join('');

    const emailContent = `
      Order detailsnpm
      Name: ${values.fullName}
      Email: ${values.email}
      Street: ${values.street}
      City: ${values.city}
      State: ${values.state}
      Zip: ${values.zip}
      Country: ${values.country.label}
      Phone: ${values.phone}

      Cart items: ${cartItem}
    `;
  
    const serviceId = "service_kxmglya";
    const templateId = "zakazgerm_gmail";
    const userId = "X6BZThkDbGkN2NKjC";
  
    emailjs.send(serviceId, templateId, {
      from_name: values.fullName,
      from_email: values.email, 
      to_name: 'gdarko999666@gmail.com',
      message: emailContent,
    }, userId)
      .then(() => {
        setOrderSuccess(true);
        resetForm();
      })
      .catch(() => {
        alert('Failed to send email');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className='checkout-form-container'>

      <div className='checkout-form-box'>

        <h1 className='checkout-form-title'> Checkout </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          >
          {({ isSubmitting, handleChange, values }) => (
            <Form>

              <div className='checkout-form-email'>

                <div className='checkout-form-email-title'>
                  <h1> Customer Info </h1>
                  <span> *Required </span>
                </div>

                <div className='checkout-form-email-content'>
                  <label htmlFor="email"> Email * </label>
                  <Field 
                    type="email" 
                    name="email" 
                    id="email"
                    className="checkout-input checkout-form-email-content-field"
                    onChange={handleChange} 
                    value={values.email}
                    title="Please fill out this field" 
                  />
                  <span>
                    <ErrorMessage 
                      name="email" 
                      id="checkout-form-email-content-error" 
                      className="checkout-form-email-content-error" 
                    />
                  </span>
                </div>

              </div>

              <div className='checkout-form-address'>

                <div className='checkout-form-address-title'>
                  <h1> Shipping Address </h1>
                  <span> *Required </span>
                </div>

                <div className='checkout-form-address-content full-name'>

                  <label htmlFor="fullName"> Full Name * </label>
                  
                  <Field 
                    type="text" 
                    name="fullName" 
                    id="fullName" 
                    onChange={handleChange} 
                    value={values.fullName} 
                    className="checkout-input checkout-form-address-content-field full-name"
                    title="Please fill out this field" 
                  />

                  <span>
                    <ErrorMessage name="fullName" className="checkout-form-address-content-error" />
                  </span>

                </div>

                <div className='checkout-form-address-content street'>

                  <label htmlFor="street"> Street Address * </label>
                  
                  <Field 
                    type="text" 
                    name="street" 
                    id="street" 
                    onChange={handleChange} 
                    value={values.street} 
                    className="checkout-input checkout-form-address-content-field street"
                    title="Please fill out this field" 
                  />
                  
                  <span>
                  <ErrorMessage name="street" className="checkout-form-address-content-error" />
                  </span>

                </div>

                <div className='checkout-form-address-location'>

                  <div className='checkout-form-address-content city-box'>

                    <label htmlFor="city"> City * </label>

                    <Field 
                      type="text" 
                      name="city" 
                      id="city" 
                      onChange={handleChange} 
                      value={values.city} 
                      className="checkout-input checkout-form-address-content-field city"
                      title="Please fill out this field" 
                    />

                    <span>
                      <ErrorMessage name="city" className="checkout-form-address-content-error" />
                    </span>

                  </div>

                  <div className='checkout-form-address-content state-box'>

                    <label htmlFor="state"> State/Providence * </label>

                    <Field 
                      type="text" 
                      name="state" 
                      id="state" 
                      onChange={handleChange} 
                      value={values.state} 
                      className="checkout-input checkout-form-address-content-field state"
                      title="Please fill out this field" 
                    />

                    <span>
                      <ErrorMessage name="state" className="checkout-form-address-content-error" />
                    </span>

                  </div>

                  <div className='checkout-form-address-content zip-box'>

                    <label htmlFor="zip"> Zip/Postal Code * </label>

                    <Field 
                      type="text" 
                      name="zip" 
                      id="zip" 
                      onChange={handleChange} 
                      value={values.zip} 
                      className="checkout-input checkout-form-address-content-field zip"
                      title="Please fill out this field" 
                    />
                    <span>
                      <ErrorMessage name="zip" className="checkout-form-address-content-error" />
                    </span>

                  </div>

                </div>

                <div className='checkout-form-address-content country'>

                  <label htmlFor="country"> Country * </label>

                  <Field 
                    type="text" 
                    name="country" 
                    id="country" 
                    onChange={handleChange} 
                    value={values.country} 
                    className="checkout-input checkout-form-address-content-field country"
                    title="Please fill out this field" 
                  >

                    {({ field, form }) => (
                      <Select
                        name="country"
                        id="checkout-input-select"
                        options={countryOptions}
                        value={countryOptions.find((option) => option.value === field.value)}
                        onChange={(option) => form.setFieldValue(field.name, option.value)}
                      />
                    )}

                  </Field>
                  
                  <span>
                    <ErrorMessage name="country" className="checkout-form-address-content-error" />
                  </span>

                </div>

                <div className='checkout-form-address-content phone'>

                  <label htmlFor="phone"> Phone * </label>
                  
                  <Field 
                    type="text" 
                    name="phone" 
                    id="phone" 
                    onChange={handleChange} 
                    value={values.phone} 
                    className="checkout-input checkout-form-address-content-field phone"
                    title="Please fill out this field" 
                  />
                  

                  <span>
                    <ErrorMessage name="phone" className="checkout-form-address-content-error" />
                  </span>

                </div>

              </div>

              <div className='checkout-form-submit'>
                <button 
                  className='checkout-form-submit-btn'
                  type="submit" disabled={isSubmitting}
                > 
                  { isSubmitting ? 'Submitting...' : 'Place Order'}
                </button>
              </div>

            </Form>
          )}
        </Formik>

      </div>

    </div>  
  )
}

export default CheckoutForm;
