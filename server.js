const express = require('express');
const sql = require("mssql/msnodesqlv8");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

var config = {
    server: "HOANG-HIEU\\LAPTOPCUAHIEU",
    database: "InternShip",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
};

sql.connect(config, function(err) {
    if (err) console.log(err);
    console.log('Connected to database!');
});

app.post('/upload', (req, res) => {
    const { imageLink } = req.body;
    
    const request = new sql.Request();
    const query = `INSERT INTO DateReport (ImageLink) VALUES ('${imageLink}')`;

    request.query(query, (err, result) => {
        if (err) {
            console.error('Error inserting into database:', err);
            res.status(500).send('Error inserting into database');
        } else {
            res.status(200).send('Image link inserted successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
