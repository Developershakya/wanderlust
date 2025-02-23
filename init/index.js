const mongoose = require('mongoose');
const initData = require('./data.js');
const listing = require('../models/listing.js');
const MONGO_URL = "mongodb://localhost:27017/wanderlust";
async function main(){
    await mongoose.connect(MONGO_URL);
}
main().then(console.log('connect db')).catch((error)=>{
    console.log(error);
});
const initDB = async () =>{
    await listing.deleteMany({});
    await listing.insertMany(initData.data);
    console.log('deleted');
    await listing.find();
}
initDB();