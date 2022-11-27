const {createClient} = require("./functionAddClients/addClient");
const {login} = require("./login/login");
http=require('http');
path=require('path');
mysql=require('mysql2');
express=require('express');
QRCode = require('qrcode');
addClient=require('./functionAddClients/addClient.js')
regClient=require('./functionAddClients/registerClients.js')
pacQuest=require('./Questions/pacQuest/pacQuestions.js')
log=require('./login/login.js')
_=require('lodash');

const app = express();

const PORT =  process.env.PORT ?? 3000;
let type='Frontend'

app.use(express.static(path.resolve(__dirname, 'static')))

app.get('/',(req,res)=>{
    let tmp = req.query
    if (_.isEmpty(tmp)) {
        res.sendFile(path.resolve(__dirname,'static','main.html'))
    }
    else
    {
        let id = log.login(tmp)
        console.log(id)
        if (id === -1) {
            res.redirect('/')
        }
        else {
            res.redirect('/admin_in')
        }
    }
})

app.get('/admin_in',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','admin_in.html'))
})

app.get('/chose',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','chose.html'))
})

app.get('/acc',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','acc.html'))
})

app.get('/test1',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','test1.html'))
})

app.get('/test2',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','test2.html'))
})

app.get('/test3',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','test3.html'))
})

app.get('/test4',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','test4.html'))
})

app.get('/test5',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','test5.html'))
})

app.get('/setOfQuestions',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','setsOfQuestions.html'))
})

app.get('/setQuestionNumber',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','setQuestionNumber.html'))
})

app.get('/admin',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','admin.html'))
})

app.get('/admin-info1',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','admin-info1.html'))
})

app.get('/admin-info2',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','admin-info2.html'))
})

app.get('/admin-info3',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','admin-info3.html'))
})

app.get('/admin-info4',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','admin-info4.html'))
})

app.get('/admin-info5',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','admin-info5.html'))
})

app.listen(PORT,()=>{
    console.log("Server has been working in port 3000")
})