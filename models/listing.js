const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const listingSchema = new Schema({
title:
{
    type:String,
},
description:String,
image:{type:String,
    

},

});
const listing = mongoose.model('listing',listingSchema);
module.exports = listing;