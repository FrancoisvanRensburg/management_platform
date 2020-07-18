import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ClientInfo from './ClientInfo';
import ProjectProgress from './Progress';
import ProjectContributors from './Contributors';
import ProjectMilestone from './Milestones';
import ProjectDescription from './Description';
import ProjectManager from './Manager';
import ProjectBudget from './Budget';

import {
  OverviewWrapper,
  LeftWrapper,
  RightWrapper,
  ProjectDetail,
  ProjectMilestones,
  ProjectMisilenious,
} from './Styles';

const ProjectOverview = ({ project, loading }) => {
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px', gap: '10px' }}>
        <div style={{ width: '50%' }}>
          <ClientInfo project={project} />
        </div>
        <div style={{ width: '50%' }}>
          <ProjectProgress project={project} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '50%',
            boxSizing: 'border-box',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <ProjectDescription project={project} />
            <ProjectManager project={project} />
            <ProjectBudget project={project} />
          </div>
          <div style={{ width: '50%' }}>
            <ProjectMilestone project={project} />
          </div>
        </div>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
          <ProjectContributors project={project} />
        </div>
      </div>
    </div>
  );
};

ProjectOverview.propTypes = {
  project: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ project: { project, loading } }) => ({
  project,
  loading,
});

export default connect(mapStateToProps, {})(ProjectOverview);
