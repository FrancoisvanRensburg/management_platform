import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { addClient } from '../../../../Redux/actions/clientActions';

import Modal from '../../../../shared/components/Modal';
import { MyTextInput, MyTextarea } from '../../../../shared/components/Forms';
import { SubmitButton } from '../../../../shared/components/Buttons';

// Styles
import {
  ClientsBoard,
  ButtonAdd,
  Content,
  Heading,
  FormGroup,
  InputField,
  SubmitSection,
} from '../Styles';

const AddClient = () => {
  const dispatch = useDispatch();
  return (
    <ClientsBoard>
      <ButtonAdd>
        <Modal modalText={'add client'} top={40} width={60}>
          <Content>
            <Heading>
              <h2>Add Client</h2>
            </Heading>
            <Formik
              initialValues={{
                name: '',
                description: '',
                contactperson: '',
                email: '',
                contnumber: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .max(40, 'Must be 40 characters or less')
                  .required('Required'),
                description: Yup.string().max(
                  280,
                  'Must be 280 characters or less'
                ),
                contactperson: Yup.string()
                  .max(50, 'Must be 50 characters or less')
                  .required('Required'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
              })}
              onSubmit={(values, { resetForm }) => {
                dispatch(addClient(values));
                resetForm({});
              }}
            >
              <Form>
                <FormGroup className='form-group'>
                  <InputField>
                    <MyTextInput
                      name='name'
                      label='Client name:'
                      placeholder='Client name'
                    />
                  </InputField>
                  <InputField>
                    <MyTextInput
                      name='contactperson'
                      label='Contact person:'
                      placeholder='Contact person name'
                    />
                  </InputField>
                </FormGroup>
                <FormGroup className='form-group'>
                  <InputField>
                    <MyTextInput
                      name='email'
                      label='Contact email:'
                      placeholder='Email'
                    />
                  </InputField>
                  <InputField>
                    <MyTextInput
                      name='contnumber'
                      label='Contact number:'
                      placeholder='Number:'
                    />
                  </InputField>
                </FormGroup>
                <FormGroup className='form-group'>
                  <div style={{ width: '100%', height: '150px' }}>
                    <MyTextarea
                      name='description'
                      placeholder='Client description'
                    />
                  </div>
                </FormGroup>
                <SubmitSection>
                  <SubmitButton text={'Add'} />
                </SubmitSection>
              </Form>
            </Formik>
          </Content>
        </Modal>
      </ButtonAdd>
    </ClientsBoard>
  );
};

export default AddClient;
