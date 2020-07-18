import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { login } from '../../../Redux/actions/authActions';
import Alert from '../../../shared/components/Alert';

import { SubmitButton } from '../../../shared/components/Buttons';
import { MyTextInput } from '../../../shared/components/Forms';
import { AuthContent, AuthBox, FormGroup, FormSubmit } from './Styles';

const Login = ({ login, isAuthenticated, loading }) => {
  if (isAuthenticated && !loading) {
    return <Redirect to='/user/overview' />;
  }
  return (
    <Fragment>
      <AuthContent>
        <AuthBox>
          <h2>Sign in</h2>
          <Alert />
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .required('Email is required')
                .email('Invalid email address'),
              password: Yup.string().required('Password is required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                login(values);
                setSubmitting(false);
                resetForm({});
              }, 400);
            }}
          >
            <Form>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  margin: '20px 0',
                }}
              >
                <label>Email:</label>
                <div style={{ width: '85%' }}>
                  <MyTextInput
                    name='email'
                    type='email'
                    placeholder='example@email.com'
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  margin: '20px 0',
                }}
              >
                <label>Password:</label>
                <div style={{ width: '85%' }}>
                  <MyTextInput
                    name='password'
                    type='password'
                    placeholder='Password'
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
                  to='/register'
                >
                  Sign Up
                </Link>
                <SubmitButton text={'Login'} />
              </FormSubmit>
            </Form>
          </Formik>
        </AuthBox>
      </AuthContent>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login })(Login);
