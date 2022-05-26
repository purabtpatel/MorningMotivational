
const { readFile } = require('fs').promises;

const express = require('express');

const app = express();

const http = require('http');

var oracleDB = require('./oracleConnection');



app.get('/', async (req, res) => {
    res.send( await readFile('./views/hello.html', 'utf8') );
});

app.get('/signup', async (request, response) =>{
    response.send( await readFile('./views/Signup.html', 'utf8'));
})
app.post('/signup', (req, res) => {
    oracleDB.signup(req,res);

})

//http.createServer(app).listen([80[73.10.169.23]])
app.listen(process.env.PORT || 3000, () => console.log('App available on port http://localhost:3000'));













//const txt = readFileSync('./hello.txt', 'utf8');

//console.log(txt)

//console.log('do this ASAP')

//const myModule = require('./module');
//console.log(myModule)

