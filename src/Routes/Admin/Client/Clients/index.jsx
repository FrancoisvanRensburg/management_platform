import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getClients } from '../../../../Redux/actions/clientActions';

import ListItem from './ListItem';

import { ClientsContainer, ComponentHeader, Table, THead } from './Styles';

const ClientList = () => {
  const clients = useSelector((store) => store.client.clients);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);
  return (
    <ClientsContainer>
      <ComponentHeader>Client list</ComponentHeader>
      <Table>
        <thead>
          <tr>
            <THead>Name</THead>
            <THead>Ongoing projects</THead>
            <THead>Completed projects</THead>
            <THead>Profile</THead>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <ListItem key={client._id} client={client} />
          ))}
        </tbody>
      </Table>
    </ClientsContainer>
  );
};

export default ClientList;
