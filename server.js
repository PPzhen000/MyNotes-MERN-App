const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const todos = require('./routes/api/todos');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

app.use('/api/users', users);
app.use('/api/todos', todos);

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server running on port ${port}`));

