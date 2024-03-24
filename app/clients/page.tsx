import ContentSection from '../ui/ContentSection';
import dynamic from 'next/dynamic';
import Loader from '../ui/Loader';
import { loadFilteredClients } from '@/helpers';

const ClientsTable = dynamic(() => import('../ui/ClientsTable'), {
  loading: () => <Loader />
});

const Page = async () => {
  const clients = await loadFilteredClients();
  return (
    <ContentSection>
      <ClientsTable clients={clients} />
    </ContentSection>
  );
};

export default Page;
