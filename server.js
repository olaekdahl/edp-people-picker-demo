import express from 'express';
//import database from './database.json';

// Static test data
const database = {
  "people": [
    {
      "first": "Alex",
      "last": "Ouyang",
      "age": 22,
      "email": "alex@google.com"
    },
    {
      "first": "Jorge",
      "last": "Pezo",
      "age": 25,
      "email": "jorge@google.com"
    },
    {
      "first": "Enock",
      "last": "Omweno",
      "age": 24,
      "email": "enock@google.com"
    },
    {
      "first": "Mae",
      "last": "Rodriguez",
      "age": 23,
      "email": "mae@google.com"
    }
  ]
}
console.log(database);
const app = express();

process.loadEnvFile();
const port = process.env.PORT || 3000;

// API route
app.get('/api/allPeople', (req, res) => {
  res.send(people);
});
app.use(express.static("web-app"));

app.listen(port, () => console.log(`Listening for requests on port ${port}`))
