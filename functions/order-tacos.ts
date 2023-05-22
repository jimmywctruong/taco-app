import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { MongoClient } from 'mongodb';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const { MONGODB_URI, MONGODB_DB } = process.env;

    if (!MONGODB_URI || !MONGODB_DB) {
      throw new Error('Missing environment variables for MongoDB connection');
    }

    let dateTime = getCurrentDateAsInteger()

    const formResponse = JSON.parse(event.body)
    const cleanResponse = copyObjectWithoutNullValues(formResponse)

    cleanResponse.dateId = dateTime

    console.log(cleanResponse)


    // return {statusCode:200}

    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db(MONGODB_DB);
    

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

function getCurrentDateAsInteger() {
  const now = new Date();
  const utcOffset = -5; // UTC offset for Chicago (UTC-5)
  const timezoneOffset = now.getTimezoneOffset() / 60; // Get the local timezone offset in hours
  const chicagoOffset = utcOffset - timezoneOffset; // Calculate the offset difference
  const chicagoDate = new Date(now.getTime() + chicagoOffset * 60 * 60 * 1000);

  const year = chicagoDate.getFullYear().toString();
  const month = (chicagoDate.getMonth() + 1).toString().padStart(2, '0');
  const day = chicagoDate.getDate().toString().padStart(2, '0');

  const dateInteger = Number(`${year}${month}${day}`);

  return dateInteger;
}

function copyObjectWithoutNullValues<T extends Record<string, any>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, value]) => value !== null)
  );
}

export { handler };