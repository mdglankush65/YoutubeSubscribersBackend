const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
const dotenv = require('dotenv');
dotenv.config();

// Connect to DATABASE
const DATABASE_URL = process.env.MONGODB_URI || "mongodb+srv://mdglankush565:YXmIEIWMarHX4p8g@subscribers.kcsx7xr.mongodb.net/Users?retryWrites=true&w=majority&appName=Subscribers&tlsAllowInvalidCertificates=true";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    // await mongoose.disconnect();
}
module.exports = refreshAll;