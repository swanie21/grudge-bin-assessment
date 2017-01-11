const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const server = app.set('port', process.env.PORT || 3001);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.locals.title = 'Grudge Bin';
app.locals.database =[];

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

app.get('/', (request, response) => {
  response.send(app.locals.title);
});

app.get('/grudges', (request, response) => {
  const grudges = app.locals.database;
  response.send(grudges);
});

app.post('/grudges', (request, response) => {
  const createGrudge = { id: Date.now(), name: request.body.name, description: request.body.description, forgiven: false };
  app.locals.database.push(createGrudge);
  response.status(201).json(app.locals.database);
});

module.exports = server;
