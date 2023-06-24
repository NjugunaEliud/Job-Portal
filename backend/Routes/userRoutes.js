const express =require('express')
const{LoginUser, SignUser} =require('../controller/userController')

const route= express.Router()

route.post('/login',LoginUser)


route.post('/signup', SignUser)




module.exports=route


