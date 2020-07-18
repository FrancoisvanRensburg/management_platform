import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllProjects } from '../../../Redux/actions/projectActions';

import ProjectItem from './Item';

import Spinner from '../../../shared/components/Spinner/Spinner';

const AllProjects = ({ getAllProjects, project: { loading, projects } }) => {
  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <ul>
            {projects.map((project) => (
              <ProjectItem key={project._id} project={project} />
            ))}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
};

AllProjects.propTypes = {
  getAllProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getAllProjects })(AllProjects);
