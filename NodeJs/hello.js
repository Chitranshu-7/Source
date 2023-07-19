const express = require('express')

const portno= 4500;
const app= express();


app.get('/', (req,res)=>{
    res.send("Hello betta ");
})


app.get('/about', (req,res)=>{
    res.send("Hello betta  on about ");
})

app.get('/contact', (req,res)=>{
    res.send("This is the contact.js page");
})
app.listen(portno,()=>{
    console.log(`The server is running on port ${portno} `)
})