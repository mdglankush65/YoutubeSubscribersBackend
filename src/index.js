const express = require('express')
const app = require('./app.js')
const refreshAll = require('./createDatabase.js')
const mongoose = require('mongoose')
const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
// const DATABASE_URL = "mongodb+srv://mdglankush565:YXmIEIWMarHX4p8g@subscribers.kcsx7xr.mongodb.net/Users?retryWrites=true&w=majority&appName=Subscribers&tlsAllowInvalidCertificates=true";
// mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => {refreshAll(); console.log('connected to database')})

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))