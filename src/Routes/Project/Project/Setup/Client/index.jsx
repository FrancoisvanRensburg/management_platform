import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import { updateProjectSetup } from '../../../../../Redux/actions/projectActions';
import { getClients } from '../../../../../Redux/actions/clientActions';

import { MyTextInput } from '../../../../../shared/components/Forms';
import CustomDropdown from '../../../../../shared/components/Dropdown';
import { SubmitButton } from '../../../../../shared/components/Buttons';

import { ClientsContainer, Header, SubmitSection } from './Styles';

const ProjectClient = () => {
  const project = useSelector((store) => store.project.project);
  const clients = useSelector((store) => store.client.clients);
  const loading = useSelector((store) => store.client.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);
  return (
    <ClientsContainer>
      <Header>Clients</Header>
      <Formik
        enableReinitialize={true}
        initialValues={{
          client: project === null || !project.client ? '' : project.client,
          contactname:
            project === null || !project.contactname ? '' : project.contactname,
          contactnumber:
            project === null || !project.contactnumber
              ? ''
              : project.contactnumber,
          contactemail:
            project === null || !project.contactemail
              ? ''
              : project.contactemail,
        }}
        validationSchema={Yup.object({
          contactemail: Yup.string().email('Invalid email address'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(updateProjectSetup(project._id, values));
          setSubmitting(false);
        }}
      >
        <Form>
          <CustomDropdown
            name='client'
            options={clients}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option._id}
          />
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <span style={{ textAlign: 'center' }}>
              Client contact person details
            </span>
            <MyTextInput name='contactname' placeholder='Contact name' />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
              }}
            >
              <MyTextInput name='contactnumber' placeholder='Contact number' />
              <MyTextInput name='contactemail' placeholder='Contact email' />
            </div>
          </div>
          <SubmitSection>
            <SubmitButton text={'add'} />
          </SubmitSection>
        </Form>
      </Formik>
    </ClientsContainer>
  );
};

export default ProjectClient;
