import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from '../../App/Routing';

import ProjectsActions from './Actions';
import AllProjects from './All';

import { ProjectsPage, Container } from './Styles';

const Projects = () => {
  return (
    <Router>
      <ProjectsPage>
        <div style={{ marginLeft: '50px' }}>
          <h1 style={{ marginBottom: '5px' }}>Projects</h1>
          <p style={{ marginTop: '0px' }}>
            All <strong>Public</strong> projects are available on this page
          </p>
        </div>
        <ProjectsActions />
        <Container>
          <PrivateRoute path='/projects/all' component={AllProjects} />
        </Container>
      </ProjectsPage>
    </Router>
  );
};

export default Projects;
