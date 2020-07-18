import React from 'react';

import { ReactComponent as DM } from '../../../../../../App/assets/images/chat-icon.svg';

import { Item, Contributor } from '../Styles';

const ContributorItem = ({ contributor }) => {
  return (
    <>
      <Item>
        <Contributor>
          <span>
            {contributor.firstname} {contributor.lastname}
          </span>
          {contributor.association ? (
            <span>{contributor.association}</span>
          ) : (
            <span>Role not defined</span>
          )}
        </Contributor>

        <span>
          <DM />
        </span>
      </Item>
    </>
  );
};

export default ContributorItem;
