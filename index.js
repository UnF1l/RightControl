http=require('http');
path=require('path');
mysql=require('mysql2');
express=require('express');
_=require('lodash');

const app = express();

const PORT =  process.env.PORT ?? 3000;
app.use(express.static(path.resolve(__dirname, 'static')))



app.get('/',(req,res)=>{
    tmp = req.query
    if (_.isEmpty(tmp)) res.sendFile(path.resolve(__dirname,'static','Main.html'))
    else
    {
        if ((tmp.name === '123') && (tmp.psw === '123')) {
            //res.sendFile(path.resolve(__dirname,'static','Main.html'))
            res.redirect('/?id=123')
        }
        else res.sendFile(path.resolve(__dirname,'static','Main.html'))
    }
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