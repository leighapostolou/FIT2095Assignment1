//import the required modules
const express = require('express');
const router = express.Router(); 
const path = require('path');

//package class
class Package{
    constructor() {
        this.package_id = package_id;
        this.package_name = package_name;
        this.package_description = package_description;
        this.package_createdAt = new Date(package_createdAt); // Ensure the date is a Date object
    }
}

//create an array
let dbPackage = [];

//get the data from the form
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

//delete package by ID
router.post('/deletepackage', (req, res) => {
    let package_id = req.body.package_id;
    //check if package ID exists
    const packageIdCheck = dbPackage.findIndex(package => package.package_id === package_id);
    if (packageIdCheck === -1) {
        //send user to "invalid data" page if ID is not found
        return res.redirect('/31458483/vasleigh/invaliddata');
    }
    //delete package from dbPackage array
    dbPackage.splice(packageIdCheck, 1);
    //send user to listAllPackages.html
    res.redirect("/31458483/vasleigh/listallpackages");
});

module.exports = router;