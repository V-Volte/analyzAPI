const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PORT = 5500;

async function connect() {
    try {
        await mongoose.connect("mongodb://volte:qwertyuiop@194.195.117.230:27017/?authMechanism=DEFAULT&authSource=mrits");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error connecting to MongoDB");
        console.log(err);
    }
}

connect();