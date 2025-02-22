const express =require('express');
const app = express();
const mongoose = require('mongoose');
const listing = require('./models/listing');
const MONGO_URL = 'mongodb://localhost:27017/wanderlust';

async function main(){
    await mongoose.connect(MONGO_URL);
}
main().then(console.log('connect db')).catch(
);
app.listen(3000,()=>{
    console.log('server is running');
});

app.get('/test', async (req,res)=>{
    res.send('hello world');
    let sample = new listing({
        title:'hi',
        description:'1',
        image:'3'
    });
    await sample.save();
});

