mysql=require('mysql2');
_=require('lodash');
let test;
function login(data){
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
      connection.query("SELECT `id` FROM `db_log_clients` WHERE `login`='"+ data.name +"' AND `password`='"+data.psw+"'",(err,result)=>{
        if (err) console.log(err);
        if(!_.isEmpty(result)) test = result[0].id
        else test = -1
    });
// закрытие подключения
    connection.end(function (err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });
    return test
}

exports.login=login