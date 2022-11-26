const {createClient} = require("./functionAddClients/addClient");
const {login} = require("./login/login");
http=require('http');
path=require('path');
mysql=require('mysql2');
express=require('express');
QRCode = require('qrcode');
addClient=require('./functionAddClients/addClient.js')
regClient=require('./functionAddClients/registerClients.js')
cAllEvent=require('./createQREvents/createAllEvent.js')
pacQuest=require('./Questions/pacQuest/pacQuestions.js')
log=require('./login/login.js')
_=require('lodash');

const app = express();

const PORT =  process.env.PORT ?? 3000;
let type='Frontend'
//pacQuest.createPacQuest(type);
//let nameEvent = 'New event';

//cAllEvent.allEvents(nameEvent);

//let user = {id:4,login:'Samadsa',password:'t61241'}
//let r_user = {setLogin:'Samanta',setPassword:'geasfw',fno:'Dydka Viktor Sergeevich', email:'Swasfwar@mail.ru',phone:'89197425213',Birthday:'2022-10-12'}
//addAdmin.createAddAdmin(user); Создание нового админа
//deleteAdmin.deleteAdmin(user); Удаление админа
//addClient.createClient(user); Добавление участника
//regClient.registerClient(r_user)

app.use(express.static(path.resolve(__dirname, 'static')))

app.get('/',(req,res)=>{
    let tmp = req.query
    if (_.isEmpty(tmp)) {
        res.sendFile(path.resolve(__dirname,'static','main.html'))
    }
    else
    {
        let id = log.login(tmp)
        //console.log(id)
        if (id === -1) {
            res.sendFile(path.resolve(__dirname,'static','Main.html'))
            res.redirect('/')
        }
        else {
            res.sendFile(path.resolve(__dirname,'static','Main.html'))
            res.redirect('/acc/?id='+id)
        }
    }
})

app.get('/acc',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','acc.html'))
})

app.get('/setOfQuestions',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','setsOfQuestions.html'))
})

app.get('/setQuestionNumber',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','setQuestionNumber.html'))
})

app.get('/adminMain',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','adminMain.html'))
})

app.get('/adminPanel',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','adminPanel.html'))
})

app.get('/adCheckPanel',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static','adCheckPanel.html'))
})

app.listen(PORT,()=>{
    console.log("Server has been working in port 3000")
})