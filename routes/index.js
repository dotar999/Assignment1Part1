/* File name: index.js
 * Author's name: Vladyslav Serdiuk
 * Web site name: Portfolio
 * File Description: our route index.js file, works with ExpressJS - get, post methods
*/


'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

router.get('/About me', (req, res) => {
    res.render('About me', { title: "About me" });
});

router.get('/Projects', (req, res) => {
    res.render('Projects', { title: "Projects" });
});

router.get('/Services', (req, res) => {
    res.render('Services', { title: "Services" });
});

router.get('/Conctact me', (req, res) => {
    res.render('Contact me', { title: "Contact me" });
});
module.exports = router;
