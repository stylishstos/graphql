const { Schema, model } = require('mongoose');

module.exports = model(
    'Director',
    new Schema({
        name: String,
        age: Number,
    })
);