/* File name: index.js
 * Author's name: Vladyslav Serdiuk
 * Web site name: Portfolio
 * File Description: our route index.js file, works with ExpressJS - get methods, which simply generates a html web page from the .pug template file.
*/


'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

//renders an html page with the ExpressJS from the .pug file as a response
router.get('/AboutMe', (req, res) => {
    res.render('AboutMe', { title: "About me" });
});

//renders an html page with the ExpressJS from the .pug file as a response
router.get('/Projects', (req, res) => {
    res.render('Projects', { title: "Projects" });
});

//renders an html page with the ExpressJS from the .pug file as a response
router.get('/Services', (req, res) => {
    res.render('Services', { title: "Services" });
});

//renders an html page with the ExpressJS from the .pug file as a response
router.get('/ContactMe', (req, res) => {
    res.render('ContactMe', { title: "Contact me" });
});
module.exports = router;
