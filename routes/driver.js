//import the required modules
const express = require('express');
const router = express.Router(); 
const path = require('path');

//create an array
let dbDriver = [];

//Send the addDriver.html file
router.get('/adddriver', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/addDriver.html'));
});

// get the data from the form
router.post('/adddriver', (req, res) => {
    //retrive the content from the request body of the form
    let aDriverName = req.body.driver_name;
    let aDriverDepartment = req.body.driver_department;
    let aDriverLicence = req.body.driver_licence;
    let aIsActive = req.body.driver_isActive;
    let aDriverCreatedAt = req.body.driver_createdAt;
    //generate a random ID for new entries 
    let driver_id = Math.round(Math.random()*1000);
    //create an object for the driver with id, name, dpeartment, licence, and active status
    let obj = {driver_id:driver_id, driver_name: aDriverName, driver_department: aDriverDepartment, driver_licence: aDriverLicence, driver_isActive: aIsActive, driver_createdAt: aDriverCreatedAt};
    dbDriver.push(obj);
    //send the user back to "/listalldrivers"
    res.redirect("/31458483/vasleigh/listalldrivers");
});

//route for "/listAllDrivers"
router.get("/listalldrivers", (req, res) => {
    res.render("listAllDrivers.html", {dbDriver: dbDriver});
});

module.exports = router;