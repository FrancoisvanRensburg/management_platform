// Remember to calculate project budget left

import React from 'react';

import ProgressBar from '../../../../../shared/components/ProgressBar';

import {
  BudgetContainer,
  ComponentHeader,
  ProgressContainer,
  ResourceBudgetProgress,
  ProjectBudgetProgress,
} from './Styles';

const ProjectBudget = ({ project }) => {
  return (
    <BudgetContainer>
      <ComponentHeader>Project budget</ComponentHeader>
      <div>
        <label htmlFor='resourcebudget'>Resource budget</label>
        <ResourceBudgetProgress>
          <ProgressBar percentage={0} />
        </ResourceBudgetProgress>
      </div>
      <div>
        <label htmlFor='resourcebudget'>Project budget</label>
        <ProjectBudgetProgress>
          <ProgressBar percentage={0} />
        </ProjectBudgetProgress>
      </div>
    </BudgetContainer>
  );
};

export default ProjectBudget;
