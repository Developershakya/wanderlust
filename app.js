const express = require("express");
const mongoose = require("mongoose");
const MONGO_URL = 'mongodb://localhost:27017/wanderlust'
const app = express();
main.then(console.log('connect db')).catch(console.log('not connected'));
async function main() {
    await mongoose.connect(MONGO_URL);
}
app.listen(3000,()=>{
    console.log('hello');
})