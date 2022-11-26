const mysql = require("mysql2");

function createPacQuest(type){
    let massQ = new Array(5)

    function callback(massQ){
        console.log(massQ)
        connection.query(`SELECT question,answer_1,answer_2,answer_3,answer_4 FROM db_question WHERE id=${massQ[0]} OR id=${massQ[1]} OR id=${massQ[2]} OR id=${massQ[3]} OR id=${massQ[4]}`,(err,result)=>{
            if(err) console.log(err)
            console.log(result)

            // закрытие подключения
             connection.end(function (err) {
                if (err) {
                    return console.log("Ошибка: " + err.message);
                }
                console.log("Подключение закрыто");
            });
        })
    }

   const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "db_clients",
        password: "root"
    });

// тестирование подключения
    connection.connect(function (err) {
        if (err) {
            return console.error("Ошибка: " + err.message);
        } else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });

     connection.query(`SELECT id FROM db_question`,(err,result)=> {
        if (err) console.log(err);
        console.log(result)
        for(let i=0;i<5;i++){
           let buffer = result[Math.round(Math.random()*5)].id
            if(massQ.indexOf(buffer)===-1){
                massQ[i]=buffer
            }
            else{
                i--
            }
        }
        callback(massQ)
        console.log(massQ)
    });
}
exports.createPacQuest=createPacQuest