import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProjectSections } from '../../../../../Redux/actions/projectActions';

import SectionForm from './Form';
import SectionItem from './SectionItem';

const ProjectSections = () => {
  const dispatch = useDispatch();
  const project = useSelector((store) => store.project.project);
  useEffect(() => {
    dispatch(getProjectSections(project._id));
  }, [dispatch]);
  const sections = useSelector((store) => store.project.sections);
  return (
    <div>
      <h1>Project sections</h1>
      {project === null ? (
        <div></div>
      ) : sections.length === 0 ? (
        <div>No sections created</div>
      ) : (
        sections.map((section) => (
          <SectionItem key={section._id} section={section} />
        ))
      )}
      <div>
        <SectionForm project={project} />
      </div>
    </div>
  );
};

export default ProjectSections;
