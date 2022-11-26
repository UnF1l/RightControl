const mysql = require("mysql2");
const {regClient} = require("./registerClients");

function registerClient(user) {
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

    connection.query("INSERT INTO `db_info_clients`(`setLogin`,`setPassword`,`fno`,`email`,`phone`,`Birthday`) VALUES ('"+ user.setLogin +"','"+ user.setPassword +"','"+ user.fno +"','"+ user.email +"','"+ user.phone +"','"+ user.Birthday +"')",(err,rows,field)=>{
        if (err) throw err;
    });
// закрытие подключения
    connection.end(function (err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });
}

exports.registerClient = registerClient