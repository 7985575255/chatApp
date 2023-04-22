const express=require('express');
const router=require('./router/router')
const cours=require('cors');
const app=express();

app.use('/user',router);

app.use(cours());
app.listen(3000, console.log('Request is lestning in port num 3000'));