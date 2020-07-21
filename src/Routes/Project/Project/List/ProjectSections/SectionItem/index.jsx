import React from 'react';

import { ReactComponent as Arrow } from '../../../../../../App/assets/images/downpolygon.svg';

import { SectionCard } from './Styles';

const SectionItem = ({ section }) => {
  return (
    <div style={{ padding: '4px 12px' }}>
      <SectionCard>
        <div
          style={{
            padding: '2px 10px',
            borderRadius: '10px',
            backgroundColor: 'rgba(3, 85, 207, 0.82)',
          }}
        >
          <span>{section.label}</span>
          <span style={{ marginLeft: '10px' }}>
            <Arrow />
          </span>
        </div>
        <div>
          {section.tasks === [] ? <p>0</p> : <p>{section.tasks.length}</p>}
        </div>
      </SectionCard>
    </div>
  );
};

export default SectionItem;
