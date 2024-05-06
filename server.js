import express from 'express';
//const express = require('express');

const app = express();

process.loadEnvFile();
const port = process.env.PORT || 3000;

// Static test data
const p1 = {
  first: "Alex",
  last: "Ouyang",
  age: 22,
  email: "alex@google.com",
}
const p2 = {
  first: "Jorge",
  last: "Pezo",
  age: 25,
  email: "jorge@google.com",
}
const p3 = {
  first: "Enock",
  last: "Omweno",
  age: 24,
  email: "enock@google.com",
}
const p4 = {
  first: "Mae",
  last: "Rodriguez",
  age: 23,
  email: "mae@google.com",
}
//
// Make an array
let people = [p1, p2, p3, p4,]

app.get('/api/allPeople', (req, res) => {
  res.send(people);
});
app.use(express.static("web-app"));

app.listen(port, () => console.log(`Listening for requests on port ${port}`))