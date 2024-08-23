//import the required modules
const express = require('express');
const router = express.Router(); 
const path = require('path');

//create an array
let dbPackage = [];

//Send the addPackage.html file
router.get('/addpackage', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/addPackage.html'));
});

// get the data from the form
router.post('/addpackage', (req, res) => {
    //retrive the content from the request body of the form
    let aPackageTitle = req.body.package_title;
    let aPackageWeight = req.body.package_weight;
    let aPackageDestination = req.body.package_destination;
    let aDescription = req.body.description;
    let aIsAllocated = req.body.isAllocated;
    let aDriverID = req.body.driver_id;
    //generate a random ID for new entries 
    let package_id = Math.round(Math.random()*1000);
    //create an object for the driver with id, name, dpeartment, licence, and active status
    let obj = {package_id:package_id, package_title: aPackageTitle, package_weight: aPackageWeight, package_destination: aPackageDestination, description: aDescription, isAllocated: aIsAllocated, driver_id: aDriverID};
    dbPackage.push(obj);
    //send the user back to "/listallpackages"
    res.redirect("/31458483/vasleigh/listallpackages");
});

//route for "/listAllPackages"
router.get("/listallpackages", (req, res) => {
    res.render("listAllPackages.html", {dbPackage: dbPackage});
});

module.exports = router;