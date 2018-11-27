const mongoose  = require('mongoose');
const express = require('express');
const app = express();

const posts = require('./routes/api/posts');
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');

app.use(express.json());

mongoose.connect('mongodb://localhost/enviteramean')
    .then( ()=> console.log('Connected...'))
    .catch( err => console.error('Connecting Failed...',err))

app.use('/api/posts',posts);
app.use('/api/users',users);
app.use('/api/profiles',profiles);

app.get('/',(req,res)=>{
    res.json({status:"succes"});
})

app.listen(3000,()=>{
    console.log('Running on port 3000');
})
