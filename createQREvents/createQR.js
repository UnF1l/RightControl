const mysql = require("mysql2");
QRCode=require('qrcode')

function createQR(nameEvent){
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

    connection.query("SELECT `id` FROM `db_events` WHERE `name`='"+ nameEvent +"'",(err,result)=>{
        if (err) console.log(err);
        console.log(result);
        QRCode.toFile(`./createQREvents/QRCodes/qrcode_${result[0].id}.png`,`https://www.greenlab.com/id:${result[0].id}`);
    });
// закрытие подключения
    connection.end(function (err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });
}

exports.createQR=createQR