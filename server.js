const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3001);
app.locals.title = 'Grudge Bin';

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

app.locals.database = {
  data: [
    { name: 'Walter White', description: 'Makes bad stuff', forgiven: 'false' },
    { name: 'The Joker', description: 'Scary clown', forgiven: 'false' }
  ]
};

app.get('/grudges', (request, response) => {
  response.json(app.locals.database.data);
});

app.post('/grudges', (request, response) => {
  const createGrudge = { id:Date.now(), name:request.body.name, description:request.body.description, forgiven: false };
  app.locals.database.data.push(createGrudge);
  response.json(app.locals.database.data);
});

module.exports = app;
