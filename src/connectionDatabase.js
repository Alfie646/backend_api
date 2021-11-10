const mysql = require('mysql2');
//Clase que genera la conexion con la BD
const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b69d4f97371e12',
    password: '97d5dafc',
    database: 'heroku_4b403e8d1738b6f'
});

//:@/?reconnect=true

mysqlConnection.connect(function (err) {
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Db is connected');
    }
});



module.exports = mysqlConnection;
