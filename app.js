import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
let app=express();
dotenv.config({path:'./config/config.env'})
app.get('/',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'web','index.html'),(err)=>{})
})
app.get('/index',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'web','index.html'),(err)=>{})
})
app.get('/about',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'web','about.html'),(err)=>{})
})
app.get('/services',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'web','services.html'),(err)=>{})
})
app.get('/contact',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'web','contact.html'),(err)=>{})
})
let port=process.env.PORT
let hostname=process.env.HOST_NAME
app.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log(`server running http://${hostname}:${port}/`)
})