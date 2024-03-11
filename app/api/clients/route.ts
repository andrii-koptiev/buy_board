import { connectDatabase } from '@/helpers';

export async function GET() {
  const { client, db } = await connectDatabase();

  const clients = await db.collection('clients').find({}).toArray();

  await client.close();

  return Response.json(clients);
}
