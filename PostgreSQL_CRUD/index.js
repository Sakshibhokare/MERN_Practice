const express = require('express');
const app=express();
const Pool= require('pg').Pool;
const path= require('path');
const ejs=require('ejs');
const PORT=3000;
require('dotenv').config();

const pool = new Pool({
    user: process.env.USER_NAME,
    host:process.env.HOST_NAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DIALECT,
    port: process.env.PORT_NUMBER
})

pool.connect((err, client, release)=>{
    if(err){
        return console.log('Error in connection')
    }
    client.query('SELECT NOW()', (err, result)=>{
        release()
        if(err){
            return console.log('Error executing query')
        }
        console.log("Connected to database")
    })
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', ejs)
app.use('/static', express.static('static'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', async(req, res)=>{
    res.render('index')
})

app.listen(PORT, ()=>{
    console.log(`sarver started at port ${PORT}`);
})