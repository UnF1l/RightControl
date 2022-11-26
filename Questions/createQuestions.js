const mysql = require("mysql2");

function createQuestion(question) {
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

    connection.query("INSERT INTO `db_question`(`question`,`answer_1`,`answer_2`,`answer_3`,`answer_4`,`right_answer`,`type`) VALUES ('"+ question.question +"','"+ question.answer_1 +"','"+ question.answer_2 +"','"+ question.answer_3 +"','"+ question.answer_4 +"','"+ question.right_answer +"','"+ question.type +"')",(err,rows,field)=>{
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

exports.createQuestion = createQuestion