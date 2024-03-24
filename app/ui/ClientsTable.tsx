import { ClientsTableHeaders } from '@/enums';
import { Client } from '@/types';
import moment from 'moment';

type Props = {
  clients: Client[];
};

const ClientsTable = ({ clients }: Props) => {
  return (
    <div className="relative overflow-x-auto h-full">
      <table className="w-full  text-sm text-left rtl:text-right text-gray-900">
        <thead className="text-xs text-grey-400 uppercase">
          <tr>
            {Object.values(ClientsTableHeaders).map(column => (
              <th key={column} scope="col" className="px-6 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clients.map(({ _id, fullName, phone, createdAt }) => (
            <tr key={_id} className="bg-white border-b border-grey-100">
              <td className="px-6 py-4">{fullName}</td>
              <td className="px-6 py-4">{phone}</td>
              <td className="px-6 py-4">
                {moment(createdAt).format('MM/DD/YYYY')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
