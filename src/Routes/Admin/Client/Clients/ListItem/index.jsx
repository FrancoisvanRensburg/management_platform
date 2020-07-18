import React, { Fragment } from 'react';

import { Tcell, ClientView } from '../Styles';

const ListItem = ({ client: { name, projects } }) => {
  return (
    <Fragment>
      <tr>
        <Tcell>{name}</Tcell>
        <Tcell>{projects.filter((e) => e.progress < 100).length}</Tcell>
        <Tcell>{projects.filter((e) => e.progress === 100).length}</Tcell>
        <Tcell>
          <ClientView>View</ClientView>
        </Tcell>
      </tr>
    </Fragment>
  );
};

export default ListItem;
