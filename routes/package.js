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
    let aCreatedAt = new Date().toISOString();
    let aIsAllocated = req.body.isAllocated;
    let aDriverID = req.body.driver_id;
    //generate a random ID for new entries 
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const randomPackageNumbers = Math.round(Math.random()*1000);

    let randomLetters = '';
    for (let i=0; i<2; i++){
        randomLetters += letters[Math.floor(Math.random()*letters.length)];
    }
    let package_id = `P${randomLetters}-VA-${randomPackageNumbers}`;
    //create an object for the driver with id, name, dpeartment, licence, and active status
    let obj = {package_id:package_id, package_title: aPackageTitle, package_weight: aPackageWeight, package_destination: aPackageDestination, description: aDescription, createdAt: aCreatedAt, isAllocated: aIsAllocated, driver_id: aDriverID};
    dbPackage.push(obj);
    //send the user back to "/listallpackages"
    res.redirect("/31458483/vasleigh/listallpackages");
});

//route for "/listAllPackages"
router.get("/listallpackages", (req, res) => {
    res.render("listAllPackages.html", {dbPackage: dbPackage});
});

module.exports = router;