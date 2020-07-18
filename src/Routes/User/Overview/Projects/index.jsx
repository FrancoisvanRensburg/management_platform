import React from 'react';
import { useSelector } from 'react-redux';

import ListItem from './ListItem';

import { ProjectsContainer, ComponentHeader, Table, THead } from './Styles';

const UserProjects = () => {
  const projects = useSelector((store) => store.user.projects);
  return (
    <ProjectsContainer>
      <ComponentHeader>Projects</ComponentHeader>
      <Table>
        <thead>
          <tr>
            <THead>Name</THead>
            <THead>Progress</THead>
            <THead>Start date</THead>
            <THead>End date</THead>
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
    </ProjectsContainer>
  );
};

export default UserProjects;
