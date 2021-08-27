const { Schema, model } = require('mongoose');

module.exports = model(
    'Movie',
    new Schema({
        name: String,
        genre: String,
        directorId: String,
    })
);