
const express = require('express');
const app = express()
const path = require("path")
const subscriberModel = require('./models/subscribers');

// Your code goes here
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get("/subscribers", async (req, res) => {
    try {
        const subscribers = await subscriberModel.find().select("-__v");

        res.status(200).json(subscribers);
    } catch (err) {
        res.status(400).json({
            error: "Database Error"
        });
    }
});

app.get("/subscribers/name", async (req, res) => {
    try {
        const nameSubscribers = await subscriberModel.find().select("name subscribedChannel -_id");
        res.status(200).json(nameSubscribers);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


app.get("/subscribers/:id", async (req, res) => {
    try {
        const nameSubscribers = await subscriberModel.findById(req.params.id);
        res.status(200).json(nameSubscribers);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = app;