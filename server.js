import express from 'express';
import cors from 'cors';
//import db from './database.json' assert {type: 'json'};
import { repo } from './repository.js';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';


dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const app = express();
app.use(cors());
process.loadEnvFile();
const port = process.env.PORT || 3000;

//API route for MongoDb
app.get('/api/allPeople', async(req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const people = await collection.find().toArray();
  res.send(people);
});



app.get('/api/People', async(req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const people = await collection.find({}).toArray();
  res.send(people);
});


app.use(express.static("web-app"));

app.listen(port, () => console.log(`Listening for requests on port ${port}`))
