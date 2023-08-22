
const express = require('express')

const path = require('path')


const shopRouter = express.Router()




shopRouter.use('/shop',(req,res,next)=>{

    res.sendFile(path.join(__dirname , '../', 'views' , 'shop.html'))
})


module.exports = shopRouter