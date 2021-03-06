const express = require('express'); //Framework para server
const app = express();

//Settings
const port = process.env.PORT || 3001;
app.set('port', process.env.PORT || 3000);


//Middleware
app.use(express.json());
//Routes
app.use(require('./routes/preguntas'));

app.get('/', (req, res) => {
    res.send('<h1> BIENVENIDO A LA API</h1>');
})

//Iniciando el server para dar servicio del API
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
})