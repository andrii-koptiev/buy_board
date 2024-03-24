import { connectDatabase } from '@/helpers';
import { ClientDB } from '@/types/db-types';

export async function GET() {
  const { client, db } = await connectDatabase();

  const clients = await db.collection<ClientDB>('clients').find({}).toArray();

  await client.close();

  return Response.json(clients);
}
