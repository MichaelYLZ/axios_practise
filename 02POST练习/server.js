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

app.post('/api/sens', (req, res) => {
    
    const comingData = req.body;
    
    fs.writeFile(
        dataPath, 
        JSON.stringify(comingData, null, '\t'),
        () => res.status(201).end()
    )
});



app.listen(3000, ()=>console.log(`Visit On localHost3000`));