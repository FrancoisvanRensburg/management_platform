import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import { updateProjectManager } from '../../../../../Redux/actions/projectActions';
import { getAllUsers } from '../../../../../Redux/actions/userActions';

import CustomDropdown from '../../../../../shared/components/Dropdown';
import { SubmitButton } from '../../../../../shared/components/Buttons';

import { ProjectMiscContainer, Header, SubmitSection } from './Styles';

const ProjectMisc = (projectId) => {
  const project = useSelector((store) => store.project.project);
  const users = useSelector((store) => store.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const filterUsers = () => {
    let pmUsers = [];
    pmUsers = users.filter((e) => e.usertype === 'Pm');
    return pmUsers;
  };

  return (
    <ProjectMiscContainer>
      <Header>ProjectMisc</Header>
      <Formik
        enableReinitialize={true}
        initialValues={{
          projectmanager:
            project === null || !project.projectmanager
              ? ''
              : project.projectmanager,
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(updateProjectManager(project._id, values));
          //   console.log(project._id, values);
          setSubmitting(false);
        }}
      >
        <Form>
          <CustomDropdown
            name='projectmanager'
            options={filterUsers()}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option._id}
          />
          <SubmitSection>
            <SubmitButton text={'update'} />
          </SubmitSection>
        </Form>
      </Formik>
    </ProjectMiscContainer>
  );
};

export default ProjectMisc;
