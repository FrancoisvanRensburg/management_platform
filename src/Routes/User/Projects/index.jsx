import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserProjects } from '../../../Redux/actions/userActions';

import ListItem from './ListItem';

import { Table, THead, ProjectsContainer } from './Styles';

const UserProjects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProjects());
  }, [dispatch]);
  const projects = useSelector((store) => store.user.projects);
  return (
    <div style={{ border: '1px solid red', height: '100%' }}>
      <Table>
        <thead>
          <tr>
            <THead>Name</THead>
            <THead>Progress</THead>
            <THead>Start date</THead>
            <THead>End date</THead>
            <THead>Days remaining</THead>
            <THead></THead>
          </tr>
        </thead>
        <tbody>
          {projects === null || projects.length === 0 ? (
            <tr>
              <td>No projects foud</td>
            </tr>
          ) : (
            projects
              .filter((project) => project.projectprogress < 100)
              .map((project) => (
                <ListItem key={project._id} project={project} />
              ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default UserProjects;
