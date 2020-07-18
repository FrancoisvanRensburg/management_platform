import React from 'react';

import AddClient from './AddClient';
import ClientList from './Clients';

// Styles
import { ClientsBoard, ButtonAdd } from './Styles';

const ClientAdmin = () => {
  return (
    <ClientsBoard>
      {/* <div> */}
      <ButtonAdd>
        <AddClient />
      </ButtonAdd>
      {/* </div> */}
      <ClientList />
    </ClientsBoard>
  );
};

export default ClientAdmin;
