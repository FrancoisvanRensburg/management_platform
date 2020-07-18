import React, { Fragment, useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCurrentCompany,
  updateCompany,
} from '../../../Redux/actions/companyActions';

import { SubmitButton } from '../../../shared/components/Buttons';
import ProjectTypes from './ProjectTypes';
import ComapnyDepartments from './Departments';
import { MyTextInput } from '../../../shared/components/Forms';
import Spinner from '../../../shared/components/Spinner/Spinner';

import { ReactComponent as Logo } from '../../../App/assets/images/upload.svg';

// Styles
import {
  AdminPage,
  CompanyContact,
  CompanyForm,
  FormSubmit,
  CompanyFields,
  CompFieldsFormGroup,
} from './Styles';

const CompanyAdmin = () => {
  const company = useSelector((store) => store.company.company);
  const loading = useSelector((store) => store.company.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentCompany());
  }, [dispatch]);

  return (
    <Fragment>
      {loading && company === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <AdminPage>
            <CompanyContact>
              <Formik
                enableReinitialize={true}
                initialValues={{
                  longname: company.longname,
                  addressline1: company.addressline1,
                  addressline2: company.addressline2,
                  addressline3: company.addressline3,
                  country: company.country,
                }}
                onSubmit={(values) => {
                  dispatch(updateCompany(values));
                }}
              >
                <Form style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Logo />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 20,
                    }}
                  >
                    <MyTextInput name='longname' placeholder='Company name' />
                    <MyTextInput
                      name='addressline1'
                      placeholder='Address line 1'
                    />
                    <MyTextInput
                      name='addressline2'
                      placeholder='Address line 2'
                    />
                    <MyTextInput
                      name='addressline3'
                      placeholder='Address line 3'
                    />
                    <MyTextInput name='country' placeholder='Country' />
                  </div>
                  <FormSubmit>
                    <SubmitButton text={'Update'} />
                  </FormSubmit>
                </Form>
              </Formik>
            </CompanyContact>

            <CompanyFields>
              <CompFieldsFormGroup className='admin-form-group'>
                <h2>DEPARTMENTS</h2>
                <ComapnyDepartments />
              </CompFieldsFormGroup>
              <CompFieldsFormGroup className='admin-form-group'>
                <h2>SECTORS</h2>
                <ProjectTypes />
              </CompFieldsFormGroup>
            </CompanyFields>
          </AdminPage>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CompanyAdmin;
