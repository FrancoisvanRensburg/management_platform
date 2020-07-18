import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { updateProjectSetup } from '../../../../../Redux/actions/projectActions';

import { DatePickerField } from '../../../../../shared/components/DatePicker';
import { MyTextarea } from '../../../../../shared/components/Forms';
import CustomDropdown from '../../../../../shared/components/Dropdown';
import {
  SubmitButton,
  DetailButton,
} from '../../../../../shared/components/Buttons';

import { ProjectDetailContainer, Header, SubmitSection } from './Styles';

// Data for type and sectop
const dept = [
  { _id: 'dept001', name: 'accounting' },
  { _id: 'dept002', name: 'engineering' },
  { _id: 'dept003', name: 'software' },
  { _id: 'dept004', name: 'projectmanagement' },
];

const sect = [
  { _id: 'sect001', name: 'implimentation' },
  { _id: 'sect002', name: 'software' },
  { _id: 'sect003', name: 'construction' },
];

const ProjectDetail = () => {
  const project = useSelector((store) => store.project.project);
  const dispatch = useDispatch();
  return (
    <ProjectDetailContainer>
      <Header>Project Detail</Header>
      <Formik
        enableReinitialize={true}
        initialValues={{
          actualstartdate:
            project === null || !project.actualstartdate
              ? ''
              : moment(project.actualstartdate),
          actualenddate:
            project === null || !project.actualenddate
              ? ''
              : moment(project.actualenddate),
          description:
            project === null || !project.description ? '' : project.description,
          tpe: project === null || !project.tpe ? '' : project.tpe,
          sector: project === null || !project.sector ? '' : project.sector,
        }}
        validationSchema={Yup.object({
          actualstartdate: Yup.date().required(
            'Project start date is required'
          ),
          actualenddate: Yup.date().when(
            'actualstartdate',
            (actualstartdate, schema) =>
              actualstartdate &&
              schema.min(actualstartdate, 'End date must be after start date')
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(updateProjectSetup(project._id, values));
          setSubmitting(false);
        }}
      >
        <Form>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              gap: '30px',
            }}
          >
            <DatePickerField
              name='actualstartdate'
              showMonthDropdown
              useShortMonthInDropdown
              placeholderText='Start date'
            />
            <DatePickerField
              name='actualenddate'
              showMonthDropdown
              useShortMonthInDropdown
              placeholderText='End date'
            />
            <DetailButton />
          </div>
          <div
            style={{ width: '100%', height: '170px', margin: '10px 0 20px' }}
          >
            <MyTextarea name='description' placeholder='Project description' />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
            }}
          >
            <div
              style={{ display: 'flex', width: '47.5%', alignItems: 'center' }}
            >
              <label>Department:</label>
              <div style={{ flexGrow: '1', marginLeft: '10px' }}>
                <CustomDropdown
                  name='tpe'
                  options={dept}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option._id}
                />
              </div>
            </div>
            <div
              style={{ display: 'flex', width: '47.5%', alignItems: 'center' }}
            >
              <label>Sector:</label>
              <div style={{ flexGrow: '1', marginLeft: '10px' }}>
                <CustomDropdown
                  name='sector'
                  options={sect}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option._id}
                />
              </div>
            </div>
          </div>
          <SubmitSection>
            <SubmitButton text={'update'} />
          </SubmitSection>
        </Form>
      </Formik>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
