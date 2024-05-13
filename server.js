import express from 'express';
import cors from 'cors';
//import db from './database.json' assert {type: 'json'};
import { repo } from './repository.js';
import { MongoClient, ObjectId } from 'mongodb';

process.loadEnvFile();

// dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const app = express();
app.use(cors());
const port = process.env.PORT || 3000

//API route for MongoDb
app.get('/api/allPeople', async (req, res) => {
  res.redirect(307, "/api/people");
});

app.get('/api/people', async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const people = await collection.find({}).toArray();
  res.send(people);
});

app.use(express.static("web-app"));

process.on('SIGINT', () => {
  console.log('Exiting the server');
  process.exit(0);
});

app.listen(port, () => console.log(`Listening for requests on port ${port}`))
