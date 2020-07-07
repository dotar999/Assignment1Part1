/* File name: index.js
 * Author's name: Vladyslav Serdiuk
 * Web site name: Portfolio
 * File Description: our route index.js file, works with ExpressJS - get methods, which simply generates a html web page from the .pug template file.
*/


'use strict';
var express = require('express');
var router = express.Router();
const app = express();
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

//I tried to create an email contact form, but it's still incomplete

/* app.post('/ContactMe', (req, res) => {
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 993,
        secure: true,
        auth: {
            user: 'serdiuk.vladyslav2000@gmail.com',
            pass: '50edefol'
        }
    })

    const mailOptions = {
        from: 'serdiuk.vladyslav2000@gmail.com',
        to: '200406142@student.georgianc.on.ca',
        subject: 'New message from portfolio website',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.text}`
    }

    transport.sendMail(mailOptions, (error, response) => {
        if (error) {
            // renders an error page 
            res.render('error')
        } else {
            //renders a home page, if email sent successfuly 
            res.render('index')
        }

    })
})

*/

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

//renders an html page with the ExpressJS from the .pug file as a response. 
router.get('/ContactMe', (req, res) => {
    res.render('ContactMe', { title: "Contact me" });
});
module.exports = router;
