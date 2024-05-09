import express from 'express';
import cors from 'cors';
//import db from './database.json' assert {type: 'json'};
import { repo } from './repository.js';

const app = express();
app.use(cors());
process.loadEnvFile();
const port = process.env.PORT || 3000;

// API route
app.get('/api/allPeople', (req, res) => {
  res.send(repo.people.readAll());
});
app.get('/api/People', (req, res) => {
  res.send(repo.people.readAll());
});
app.use(express.static("web-app"));

app.listen(port, () => console.log(`Listening for requests on port ${port}`))
