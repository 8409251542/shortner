const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
    },
    longUrl: {
        type: String,
        required: true,
    }
})

const UrlSchema=mongoose.model('url',urlSchema);
module.exports=UrlSchema;