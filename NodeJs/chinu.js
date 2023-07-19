const express = require("express")
const opts = require("otp-generator")

const myotp = opts.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });

const app = express();

app.get('/', (req,res)=>{
    res.send(`One time password is : ${myotp}`)
    
})

app.listen(4000)