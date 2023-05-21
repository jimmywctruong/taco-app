import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { MongoClient } from 'mongodb';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const { MONGODB_URI, MONGODB_DB } = process.env;

    if (!MONGODB_URI || !MONGODB_DB) {
      throw new Error('Missing environment variables for MongoDB connection');
    }

    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db(MONGODB_DB);

    const formResponse = JSON.parse(event.body)
    const cleanResponse = copyObjectWithoutNullValues(formResponse)
    console.log(cleanResponse)

    const collection = db.collection('orders');
    await collection.insertOne(cleanResponse);

    client.close();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data inserted successfully' }),
    };
  } catch (error) {

    console.log(error.message)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

function copyObjectWithoutNullValues<T extends Record<string, any>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, value]) => value !== null)
  );
}

export { handler };