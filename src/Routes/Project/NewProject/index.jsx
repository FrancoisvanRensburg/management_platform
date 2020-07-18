import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { createProject } from '../../../Redux/actions/projectActions';
import { getClients } from '../../../Redux/actions/clientActions';

import {
  MyTextInput,
  MySelect,
  MyTextarea,
} from '../../../shared/components/Forms';
import { SubmitButton } from '../../../shared/components/Buttons';

import {
  ProjectWrapper,
  Row1,
  FormGroup,
  SubmitSection,
  Label,
  UploadFileInput,
  UploadSection,
  UploadFileLabel,
} from './Styles';

// Data for type and sectop
const dept = [
  { _id: '1', name: 'accounting' },
  { _id: '2', name: 'engineering' },
  { _id: '3', name: 'software' },
  { _id: '4', name: 'projectmanagement' },
];

const sect = [
  { _id: '5', name: 'implimentation' },
  { _id: '6', name: 'software' },
  { _id: '7', name: 'construction' },
];

const NewProject = () => {
  const clients = useSelector((store) => store.client.clients);
  const loading = useSelector((store) => store.client.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <ProjectWrapper>
      <h2>Create new project</h2>
      <Formik
        initialValues={{
          projectname: '',
          projectcode: '',
          actualstartdate: '',
          actualenddate: '',
          client: '',
          tpe: '',
          sector: '',
          description: '',
          resourcebudget: '',
          projectbudget: '',
        }}
        validationSchema={Yup.object({
          projectname: Yup.string()
            .max(40, 'Must be 40 characters or less')
            .required('Required'),
          projectcode: Yup.string()
            .max(8, 'Must be 6 characters or less')
            .min(3, 'Must be 3 characters or more')
            .required('Required'),
          tpe: Yup.string().required('Required'),
          sector: Yup.string().required('Required'),
          description: Yup.string().max(
            280,
            'Must me 280 characters or less. Upload a project specification if required'
          ),
        })}
        onSubmit={(values) => {
          dispatch(createProject(values));
        }}
      >
        <Form style={{ width: '100%' }}>
          <Row1>
            <div
              style={{ width: '60%', display: 'flex', alignItems: 'center' }}
            >
              <MyTextInput name='projectname' placeholder='Project name' />
            </div>
            <div
              style={{ width: '35%', display: 'flex', alignItems: 'center' }}
            >
              <MyTextInput name='projectcode' placeholder='Project code' />
            </div>
          </Row1>
          <Row1>
            <FormGroup style={{ width: '47.5%' }}>
              <MyTextInput
                label='Start date:'
                name='actualstartdate'
                type='date'
              />
            </FormGroup>
            <FormGroup style={{ width: '47.5%' }}>
              <MyTextInput
                label='Start date:'
                name='actualenddate'
                type='date'
              />
            </FormGroup>
          </Row1>
          <Row1>
            {/* <FormGroup> */}
            {/* <MySelect name='inhouse' label='Project type:'>
                <option value={false}>External</option>
                <option value={true}>Inhouse</option>
              </MySelect> */}
            {/* </FormGroup> */}
            <FormGroup style={{ width: '100%' }}>
              <Label htmlFor='client'>Client:</Label>
              {loading ? (
                <span>Loading...</span>
              ) : (
                <MySelect name='client'>
                  <option value=''>Select a client</option>
                  {clients.map((client) => (
                    <option key={client._id} value={client._id}>
                      {client.name}
                    </option>
                  ))}
                </MySelect>
              )}
            </FormGroup>
          </Row1>
          <Row1>
            <FormGroup style={{ width: '47.5%' }}>
              <MySelect name='tpe'>
                <option value=''>Department</option>
                {dept.map((dep) => (
                  <option key={dep._id} value={dep._id}>
                    {dep.name}
                  </option>
                ))}
              </MySelect>
            </FormGroup>
            <FormGroup style={{ width: '47.5%' }}>
              <MySelect name='sector'>
                <option value=''>Sector</option>
                {sect.map((sec) => (
                  <option key={sec._id} value={sec._id}>
                    {sec.name}
                  </option>
                ))}
              </MySelect>
            </FormGroup>
          </Row1>
          <Row1>
            <div style={{ width: '100%', height: '150px', display: 'flex' }}>
              <MyTextarea
                name='description'
                placeholder='Project description'
              />
            </div>
          </Row1>
          <Row1>
            <FormGroup style={{ width: '100%' }}>
              <MyTextInput
                label='Resource budget:'
                name='resourcebudget'
                type='number'
              />
            </FormGroup>
          </Row1>
          <Row1>
            <FormGroup style={{ width: '100%' }}>
              <MyTextInput
                label='Project budget:'
                name='projectbudget'
                type='number'
              />
            </FormGroup>
          </Row1>
          <Row1>
            <UploadSection>
              <UploadFileInput type='file' name='' id='add-doc' />
              <UploadFileLabel htmlFor='add-doc'>
                + add document
              </UploadFileLabel>
            </UploadSection>
          </Row1>
          <SubmitSection>
            <SubmitButton text={'Create'} />
          </SubmitSection>
        </Form>
      </Formik>
    </ProjectWrapper>
  );
};

export default NewProject;
