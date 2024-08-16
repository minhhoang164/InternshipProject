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
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const request = new sql.Request();
    const query = `SELECT * FROM Account WHERE username = @username AND password = @password`;

    request.input('username', sql.VarChar, username);
    request.input('password', sql.VarChar, password);

    request.query(query, (err, result) => {
        if (err) {
            console.error('Error fetching user from database:', err);
            res.status(500).json({ message: 'Error fetching user from database' });
        } else {
            if (result.recordset.length > 0) {
                // Lấy thông tin tài khoản
                const account = result.recordset[0];
                const accountId = account.account_id; // Sử dụng account_id thay vì id

                // Truy vấn thông tin người dùng liên kết với accountId
                const userRequest = new sql.Request();
                const userQuery = `SELECT * FROM Users WHERE account_id = @accountId`;

                userRequest.input('accountId', sql.Int, accountId);

                userRequest.query(userQuery, (userErr, userResult) => {
                    if (userErr) {
                        console.error('Error fetching user information from database:', userErr);
                        res.status(500).json({ message: 'Error fetching user information from database' });
                    } else {
                        if (userResult.recordset.length > 0) {
                            res.status(200).json({
                                message: 'Login successful',
                                account: {
                                    account_id: account.account_id,
                                    username: account.username,
                                },
                                user: null
                            });
                        } else {
                            res.status(401).json({ message: 'User information not found' });
                        }
                    }
                });
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        }
    });
});





app.post('/upload', async (req, res) => {
    const { userId, waterLevelArea, date, attendancePoint, personalEquipmentCheck, confirmSign, imageLink, mainRubber, secondaryRubber } = req.body;

    try {
        const dateReportRequest = new sql.Request();
        const dateReportQuery = `INSERT INTO DateReport (user_id, water_level_area, date, attendance_point, personal_equipment_check, confirm_sign, imageLink)
                                 OUTPUT INSERTED.report_id
                                 VALUES (@userId, @waterLevelArea, @date, @attendancePoint, @personalEquipmentCheck, @confirmSign, @imageLink)`;

        dateReportRequest.input('userId', sql.Int, userId);
        dateReportRequest.input('waterLevelArea', sql.VarChar, waterLevelArea);
        dateReportRequest.input('date', sql.Date, date);
        dateReportRequest.input('attendancePoint', sql.Bit, attendancePoint);
        dateReportRequest.input('personalEquipmentCheck', sql.VarChar, personalEquipmentCheck);
        dateReportRequest.input('confirmSign', sql.VarChar, confirmSign);
        dateReportRequest.input('imageLink', sql.VarChar, imageLink);

        const dateReportResult = await dateReportRequest.query(dateReportQuery);
        const reportId = dateReportResult.recordset[0].report_id;
        console.log('Generated reportId:', reportId);

        const mainRubberRequest = new sql.Request();
        const mainRubberQuery = `INSERT INTO MainRubber (report_id, lot_name, nh3_liters, first_batch_kg, first_batch_block, first_batch_stove, second_batch_kg, second_batch_block, second_batch_stove, scraped_rubber)
                                 VALUES (@reportId, @lotName, @nh3Liters, @firstBatchKg, @firstBatchBlock, @firstBatchStove, @secondBatchKg, @secondBatchBlock, @secondBatchStove, @scrapedRubber)`;

        mainRubberRequest.input('reportId', sql.Int, reportId);
        mainRubberRequest.input('lotName', sql.VarChar, mainRubber.lot_name);
        mainRubberRequest.input('nh3Liters', sql.Float, mainRubber.nh3_liters);
        mainRubberRequest.input('firstBatchKg', sql.Float, mainRubber.first_batch_kg);
        mainRubberRequest.input('firstBatchBlock', sql.VarChar, mainRubber.first_batch_block);
        mainRubberRequest.input('firstBatchStove', sql.VarChar, mainRubber.first_batch_stove);
        mainRubberRequest.input('secondBatchKg', sql.Float, mainRubber.second_batch_kg);
        mainRubberRequest.input('secondBatchBlock', sql.VarChar, mainRubber.second_batch_block);
        mainRubberRequest.input('secondBatchStove', sql.VarChar, mainRubber.second_batch_stove);
        mainRubberRequest.input('scrapedRubber', sql.VarChar, mainRubber.scraped_rubber);

        await mainRubberRequest.query(mainRubberQuery);

        const secondaryRubberRequest = new sql.Request();
        const secondaryRubberQuery = `INSERT INTO SecondaryRubber (report_id, lot_name, frozen_kg, stew_kg, wire_kg, total_harvest_kg)
                                      VALUES (@reportId, @lotName, @frozenKg, @stewKg, @wireKg, @totalHarvestKg)`;

        secondaryRubberRequest.input('reportId', sql.Int, reportId);
        secondaryRubberRequest.input('lotName', sql.VarChar, secondaryRubber.lot_name);
        secondaryRubberRequest.input('frozenKg', sql.Float, secondaryRubber.frozen_kg);
        secondaryRubberRequest.input('stewKg', sql.Float, secondaryRubber.stew_kg);
        secondaryRubberRequest.input('wireKg', sql.Float, secondaryRubber.wire_kg);
        secondaryRubberRequest.input('totalHarvestKg', sql.Float, secondaryRubber.total_harvest_kg);

        await secondaryRubberRequest.query(secondaryRubberQuery);

        res.status(200).send('Report and related data inserted successfully');
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error inserting data');
    }
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});