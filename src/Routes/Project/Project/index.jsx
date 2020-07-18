import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { getProject } from '../../../Redux/actions/projectActions';
import { loadUser } from '../../../Redux/actions/authActions';

import PrivateRoute from '../../../App/Routing';

import ProjectActions from './Actions';
import Spinner from '../../../shared/components/Spinner/Spinner';
import ProjectSetup from './Setup';
import ProjectOverview from './Overview';
import ProjectDetail from './Detail';
import ProjectChat from './Chat';
import ProjectListView from './SetupView/List';

import { ProjectPage, Container } from './Styles';

const Project = ({ project: { project, loading }, match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getProject(match.params.projectId));
  }, [dispatch, match.params.projectId]);
  return (
    <Router>
      {loading || project === null ? (
        <Spinner />
      ) : (
        <ProjectPage>
          <div style={{ marginLeft: '50px' }}>
            <h1 style={{ marginBottom: '5px' }}>
              Project Workspace -{' '}
              <em>
                <strong>{project.projectname}</strong>
              </em>
            </h1>
            <p style={{ marginTop: '0px' }}>Welcome to the dashboard</p>
          </div>
          <ProjectActions project={project} projectId={project._id} />
          <Container>
            <PrivateRoute
              path='/project/:projectId/setup'
              component={ProjectSetup}
            />
            <PrivateRoute
              path='/project/:projectId/overview'
              component={ProjectOverview}
            />
            <PrivateRoute
              path='/project/:projectId/detail'
              component={ProjectDetail}
            />
            <PrivateRoute
              path='/project/:projectId/view'
              component={ProjectListView}
            />
            <PrivateRoute
              path='/project/:projectId/chat'
              component={ProjectChat}
            />
          </Container>
        </ProjectPage>
      )}
    </Router>
  );
};

Project.propTypes = {
  // getProject: PropTypes.func.isRequired,
  // project: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Project);
