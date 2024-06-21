import { Client, Databases, ID } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  // Why not try the Appwrite SDK?
  //
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6675381500139de6f452')
    .setKey(process.env.APPWRITE_API_KEY);

  const db = new Databases(client);

  // You can log messages to the console
  log('Hello, Logs!');

  // If something goes wrong, log an error
  error('Hello, Errors!');

  // The `req` object contains the request data
  if (req.method === 'GET') {
    const json = JSON.stringify(req);

    await db.createDocument(
      '6675396f000053648890',
      '66753a8800161783b01f',
      ID.unique(),
      {
        request: json,
      }
    );

    // Send a response with the res object helpers
    // `res.send()` dispatches a string back to the client
    return res.send('Hello, World!');
  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
