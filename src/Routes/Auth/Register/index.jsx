import React, { Fragment, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';

import { registerCompany } from '../../../Redux/actions/authActions';

// Components
import { AuthRegister, AdminCridentials, FormSubmit } from './Styles';
import { MyTextInput } from '../../../shared/components/Forms';
import { SubmitButton } from '../../../shared/components/Buttons';

const Register = () => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const dispatch = useDispatch();

  if (isAuthenticated) {
    return <Redirect to='/admin/users' />;
  }

  return (
    <Fragment>
      <AuthRegister>
        <div className='heading'>
          <h2 style={{ textAlign: 'center' }}>Sign up</h2>
        </div>
        <Formik
          initialValues={{
            longname: '',
            shortname: '',
            // projectprefix: '',
            email: '',
            password: '',
            password2: '',
            firstname: '',
            lastname: '',
          }}
          validationSchema={Yup.object({
            longname: Yup.string()
              .max(55, 'Must be 55 characters or less')
              .required('Organisation name is required'),
            shortname: Yup.string()
              .max(9, 'Domain must be 9 characters or less')
              .required('Domain is required'),
            // projectprefix: Yup.string()
            //   .max(5, 'Must be 5 characters or less')
            //   .required(
            //     'A project prefix is required for you to create projects'
            //   ),
            email: Yup.string()
              .email('Invalid email address')
              .required('Admin email is required'),
            firstname: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastname: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            password: Yup.string()
              .max(12, 'Must be 12 characters or less')
              .min(4, 'Must be at least four characters')
              .required('required'),
            password2: Yup.string().when('password', {
              is: (val) => (val && val.length > 0 ? true : false),
              then: Yup.string().oneOf(
                [Yup.ref('password')],
                'Both password need to be the same'
              ),
            }),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            dispatch(registerCompany(values));
            setSubmitting(false);
            resetForm({});
          }}
        >
          <Form>
            <div style={{ margin: '20px auto' }}>
              <MyTextInput name='longname' placeholder='Company name' />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '20px 0',
              }}
            >
              <div style={{ marginRight: '10px', width: '50%' }}>
                <MyTextInput placeholder='Domain' name='shortname' />
              </div>
              <div style={{ marginLeft: '10px', width: '50%' }}>
                <MyTextInput
                  placeholder='Project prefix'
                  name='projectprefix'
                />
              </div>
            </div>
            <AdminCridentials>
              <h3>Admin cridentials</h3>
              <p>
                The admin user will be used change company details and set up
                users for the company if neccessary
              </p>
            </AdminCridentials>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '20px 0',
              }}
            >
              <div style={{ marginRight: '10px', width: '50%' }}>
                <MyTextInput placeholder='First name' name='firstname' />
              </div>
              <div style={{ marginLeft: '10px', width: '50%' }}>
                <MyTextInput placeholder='Last name' name='lastname' />
              </div>
            </div>
            <div style={{ margin: '20px auto' }}>
              <MyTextInput placeholder='Email' name='email' type='email' />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '20px 0',
              }}
            >
              <div style={{ marginRight: '10px', width: '50%' }}>
                <MyTextInput
                  placeholder='Password'
                  name='password'
                  type='password'
                />
              </div>
              <div style={{ marginLeft: '10px', width: '50%' }}>
                <MyTextInput
                  placeholder='Confirm password'
                  name='password2'
                  type='password'
                />
              </div>
            </div>

            <FormSubmit>
              <Link
                style={{
                  padding: '9px 0 9px 10px',
                  color: 'rgb(155, 110, 255)',
                  fontWeight: 'bold',
                }}
                to='/login'
              >
                Sign in
              </Link>
              <SubmitButton text={'Sign up'} />
            </FormSubmit>
          </Form>
        </Formik>
      </AuthRegister>
    </Fragment>
  );
};

export default Register;

{
  /* <Fragment>
      <AuthRegister>
        <div className='heading'>
          <h2>Sign up</h2>
        </div>
        <form onSubmit={submitForm}>
          <FormGroup className='form-group'>
            <Input
              name='longname'
              type='text'
              width='90'
              placeholder='Company name'
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className='form-group'>
            <Input
              placeholder='Domain'
              name='shortname'
              onChange={handleChange}
              type='text'
              width='80'
              validation='required|min:6'
            />
            <Input
              placeholder='Project prefix'
              name='projectprefix'
              onChange={handleChange}
              type='text'
              width='80'
              validation='required|min:6'
            />
          </FormGroup>
          <AdminCridentials>
            <h3>Admin cridentials</h3>
            <p>
              The admin user will be used change company details and set up
              users for the company if neccessary
            </p>
          </AdminCridentials>

          <FormGroup className='form-group'>
            <Input
              placeholder='First name'
              name='firstname'
              onChange={handleChange}
              type='text'
              width='80'
              validation='required|min:6'
            />
            <Input
              placeholder='Last name'
              name='lastname'
              onChange={handleChange}
              type='text'
              width='80'
              validation='required|min:6'
            />
          </FormGroup>
          <FormGroup className='form-group'>
            <Input
              placeholder='Email'
              name='email'
              onChange={handleChange}
              type='email'
              width='90'
              validation='required|min:6'
            />
          </FormGroup>
          <FormGroup className='form-group'>
            <Input
              placeholder='Password'
              name='password'
              onChange={handleChange}
              type='password'
              width='90'
              validation='required|min:6'
            />
          </FormGroup>
          <FormGroup className='form-group'>
            <Input
              placeholder='Confirm password'
              name='password2'
              onChange={handleChange}
              type='password'
              width='90'
              validation='required|min:6'
            />
          </FormGroup>

          <FormSubmit>
            <Link
              style={{
                padding: '9px 0 9px 10px',
                color: 'rgb(155, 110, 255)',
                fontWeight: 'bold',
              }}
              to='/login'
            >
              Sign in
            </Link>
            <SubmitButton text={'Sign up'} />
          </FormSubmit>
        </form>
      </AuthRegister>
    </Fragment> */
}
