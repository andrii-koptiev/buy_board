import { Client, ClientDB } from '@/types';
import { formatDBClients } from './api-formatters';

export const loadFilteredClients = async (): Promise<Client[]> => {
  try {
    const response = await fetch(`${process.env.HOST}/api/clients`, {
      cache: 'no-store'
    });

    const filteredClients = (await response.json()) as ClientDB[];

    return formatDBClients(filteredClients);
  } catch (e: any) {
    // Todo - replace with error
    throw new Error('load error');
  }
};
