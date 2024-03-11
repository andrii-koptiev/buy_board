import { Db, MongoClient, ServerApiVersion } from 'mongodb';

type connectDatabaseReturnType = {
  client: MongoClient;
  db: Db;
};

export const connectDatabase = async (): Promise<connectDatabaseReturnType> => {
  const client = new MongoClient(process.env.MONGODB_URI!, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  });
  await client.connect();
  const db = client.db(process.env.DB_NAME!);

  return {
    client,
    db
  };
};
