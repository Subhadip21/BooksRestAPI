
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/booksdb',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Connected to db'))
.catch(error => console.error(error))

app.use(express.json())

const library = require('./allBooks/books')
app.use('/books',library)

app.listen(3000);