const express = require('express');
const bodyParser = require('body-parser');
const fc = require('./controllers/filmcontroller');

const app = express();
const PORT = 3005;



app.use(express.json());

app.get('/api/films', fc.get);

app.post('/api/films', fc.post);

app.put('/api/films/:id', fc.put)

app.delete('/api/films/:id', fc.delete)
    




app.listen(PORT, ()=>{console.log(`listenin' on port ${PORT}`)})








