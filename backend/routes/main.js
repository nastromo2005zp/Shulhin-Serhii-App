//routing main /


module.exports = function (app) {
    const mysql      = require('mysql');
    const connection = mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        password : '',
        database : 'ideas4me'
    });

    connection.connect(err => {
        if (err) {
            console.log(err);
            return err;
        }
        else {
            // tableName = "test";
            console.log('DATABASE ----- OK!');

        }
        
    });






    app.get('/getactivities', (req, res) => {


        connection.query("SELECT * FROM ideas4me.activities;",
            function(err, results, fields) {
               // console.log(err);
              // console.log(results);
                // console.log(fields);
                
                return res.json(results);
            });



    })


    app.get('/addnewitem', (req, res) => {
       console.log(req.query.activity_title);
       console.log(req.query.category_title);
        console.log(req.query.time_when_completed);
        const activityTitle = req.query.activity_title;
        const categoryTitle = req.query.category_title;
        const timeWhenCompleted = req.query.time_when_completed;

        const sql = "INSERT INTO ideas4me.activities (activity_title, category_title, time_when_completed) VALUES (?,?,?)";
        const params = [activityTitle, categoryTitle, timeWhenCompleted];
        connection.query(sql, params,
            function(err, results) {
                console.log(results);
                console.log(params);
            });
        connection.query("SELECT * FROM ideas4me.activities;",
            function(err, results, fields) {
                 console.log(err);
                 
                return res.json(results);
            });






    })






}