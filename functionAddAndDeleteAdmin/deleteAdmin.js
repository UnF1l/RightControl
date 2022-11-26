const mysql = require("mysql2");

function deleteAdmin(user) {
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

    connection.query("DELETE FROM `db_info_adminaccount` WHERE `id`='"+user.id+"'",(err,rows,field)=>{
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

exports.deleteAdmin = deleteAdmin