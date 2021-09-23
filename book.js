//for validating fields using validator
const validator = require('validator')
//Load Express
const express = require('express')
//http request using request library
const request = require('request')

const fs = require('fs')
const app = express()
fs.writeFileSync('in.txt','jyotirmou dasah sdfjksdfha aksdfhsakdfakl akshdfkas kasdfhkahfka ')

console.log(validator.isEmail('hhhh@gmail.l'))
// Recieve the arguments from the command line

app.get("/book",(req,res)=>{
console.log(req.query)
 res.send(()=>{
    const url = "http://api.weatherstack.com/current?access_key=c9987d2fce670f255f92c39ea0744184&query=12.971599,77.594566"
    request({url,json:true},(error,response)=>{
        if(error){
            return error
        }else{
            return response.body.toString()
        }
    })
 })
})
app.get('/weather',(req,res)=>{
    if(!req.query.search){
        return res.send('Error mention search type')
    }
    res.send({
        search: req.query.search
    })

})

app.listen('3000',()=>{
    console.log("server is running")
})

