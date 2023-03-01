const sets = require('../datasetsjson/sets.json');
const fs = require('fs');

// Load JSON data from sets.json
let temp = sets.data;



module.exports = (a) => {
    if (a >= temp.length) return null;
    return temp[a];
}