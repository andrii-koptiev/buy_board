import { ClientDB, Client } from '@/types';

export const formatDBClients = (clients: ClientDB[]): Client[] =>
  clients.map(({ _id, firstName, lastName, phone, createdAt }) => ({
    _id,
    fullName: `${firstName} ${lastName}`,
    phone,
    createdAt
  }));
