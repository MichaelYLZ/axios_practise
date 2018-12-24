const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

const filePath = path.resolve('app');
const dataPath = path.resolve('data.json');
      
app.use(express.static(filePath))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/sens', (req, res) => {
    
    fs.readFile(dataPath, (err, data) => {
        if(err) throw err;
        
        res.json(JSON.parse(data));
    })
});



app.listen(3000, ()=>console.log(`Visit On localHost3000`));