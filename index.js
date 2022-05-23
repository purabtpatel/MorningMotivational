
const { readFile } = require('fs').promises;

const express = require('express');

const app = express();





app.get('/', async (request, response) => {
    response.send( await readFile('./public/hello.html', 'utf8') );
});

app.get('/signup', async (request, response) =>{
    response.send( await readFile('./public/Signup.html', 'utf8'));
})
app.post('/signup', function(req, res){
    
})

app.listen(process.env.PORT || 3000, () => console.log('App available on port http://localhost:3000'));













//const txt = readFileSync('./hello.txt', 'utf8');

//console.log(txt)

//console.log('do this ASAP')

//const myModule = require('./module');
//console.log(myModule)

