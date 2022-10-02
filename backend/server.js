const express = require('express');
const app = express();
const port = 8000;


// res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});




require('./routes')(app);




app.listen(port, ()=>{
    console.log('work on '+port);
});

















// CREATE TABLE `ideas4me`.`activities` (
//   `activity_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
//   `activity_title` VARCHAR(255) NOT NULL,
//   `category_title` VARCHAR(255) NOT NULL,
//   `time_when_comlpeted` VARCHAR(255) NOT NULL,
//   PRIMARY KEY (`activity_id`),
//   UNIQUE INDEX `activity_id_UNIQUE` (`activity_id` ASC));


