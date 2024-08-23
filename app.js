//defining that I am using express.js
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const VIEWS_PATH = path.join(__dirname, "/views/");
//import the driver route
const driverRouter = require('./routes/driver');
//import the package route
const packageRouter = require('./routes/package');

//establishing my server to port 8080
app.listen(8080);

//middleware to parse the form content
app.use(express.urlencoded({extended: true}));

app.use(express.static("node_modules/bootstrap/dist/css"));

app.use('/31458483/vasleigh', driverRouter);
app.use('/31458483/vasleigh', packageRouter);

//ejs
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(express.static("public/images"));

//1. Route Table - the following code lists all my endpoints the project listens to
app.get("/", function(req, res){
    let fileName = VIEWS_PATH + "index.html"
    console.log(fileName);
    res.render("index");
}); //index.html page i.e. home page

app.get("/31458483/vasleigh/adddriver", function(req, res){
    let fileName = VIEWS_PATH + "addDriver.html"
    console.log(fileName);
    res.sendFile(fileName);
}); //addDriver.html page i.e. page to add a new driver

app.get("/31458483/vasleigh/listalldrivers", function(req, res){
    let fileName = VIEWS_PATH + "listAllDrivers.html"
    console.log(fileName);
    res.sendFile(fileName);
}); //listAllDrivers.html page i.e. page to see a list of all drivers

app.get("/31458483/vasleigh/deletedriver", function(req, res){
    let fileName = VIEWS_PATH + "deleteDriver.html"
    console.log(fileName);
    res.sendFile(fileName);
}); //deleteDriver.html page i.e. page to delete a driver

app.get("/31458483/vasleigh/addpackage", function(req, res){
    let fileName = VIEWS_PATH + "addPackage.html"
    console.log(fileName);
    res.sendFile(fileName);
}); //addPackage.html page i.e. page to add a package

app.get("/31458483/vasleigh/listallpackages", function(req, res){
    let fileName = VIEWS_PATH + "listAllPackages.html"
    console.log(fileName);
    res.sendFile(fileName);
}); //listAllPackages.html page i.e. page to see a list of all packages

app.get("/31458483/vasleigh/deletepackage", function(req, res){
    let fileName = VIEWS_PATH + "deletePackage.html"
    console.log(fileName);
    res.sendFile(fileName);
}); //deletePackage.html page i.e. page to delete a package

app.get("/31458483/vasleigh/invaliddata", function(req, res){
    let fileName = VIEWS_PATH + "invalidData.html"
    console.log(fileName);
    res.sendFile(fileName);
}); //invalidData.html page i.e. user will be sent to this page if they enter invalid data into a form

app.get("***", function(req, res){
    let fileName = VIEWS_PATH + "pageNotFound.html"
    console.log(fileName);
    res.sendFile(fileName);
}); //pageNotFound.html page i.e. user will be sent to this page if they enter invalid URL endpoint