// MongoDB Playground

// The current database to use.
use('edp_people_picker');

// Create a new document in the collection.
db.getCollection('people').insertMany([
    { "first": "Rap", "last": "Payne", "age": 46, "email": "rap@creator.net" },
    { "first": "Alex", "last": "Ouyang", "age": 25, "email": "alex@google.com" },
    { "first": "Anders", "last": "Boyum", "age": 25, "email": "anders@google.com" },
    { "first": "Dagi", "last": "Girma", "age": 25, "email": "dagi@google.com" },
    { "first": "Enock", "last": "Omweno", "age": 25, "email": "enock@google.com" },
    { "first": "Evan", "last": "Miller", "age": 25, "email": "evan@google.com" },
    { "first": "Golam", "last": "Mostafa", "age": 25, "email": "mostafa@google.com" },
    { "first": "Jay", "last": "Mistry", "age": 25, "email": "jay@google.com" },
    { "first": "Jonathan", "last": "Viegut", "age": 25, "email": "jonathan@google.com" },
    { "first": "Jorge", "last": "Pezo", "age": 25, "email": "jorge@google.com" },
    { "first": "Joshua", "last": "Hughes", "age": 25, "email": "joshua@google.com" },
    { "first": "Mae", "last": "Rodriguez", "age": 25, "email": "mae@google.com" },
    { "first": "Marion", "last": "Gordon", "age": 25, "email": "marion@google.com" },
    { "first": "Maximilien", "last": "Klein", "age": 25, "email": "maximilien@google.com" },
    { "first": "Nikki", "last": "Franco", "age": 25, "email": "nikki@google.com" },
    { "first": "Sean", "last": "Stebbin", "age": 25, "email": "sean@google.com" },
    { "first": "Zachary", "last": "Gordon-Burns", "age": 25, "email": "zachary@google.com" }
]);