

const express = require('express')
const path = require('path')
const app = express();
const bodyparser = require('body-parser')

const adminPage = require('./router/admin')
const shopPage = require('./router/shop')


app.use(bodyparser.urlencoded({extended:false}))    

app.use('/home', (req,res,next)=>{

    res.send("<h1>this is home </h1>")
} )

app.use('/admin',adminPage)

app.use(shopPage)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname , './' , 'views' , 'error.html'))

})


app.listen(5000,()=>console.log('server runs on 5000'))