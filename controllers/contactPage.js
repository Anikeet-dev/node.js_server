
const path = require('path');
const rootDir = path.dirname(require.main.filename);

exports.getContact = (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));

};

exports.getSuccess = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
};

exports.postSuccess = (req, res, next) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    console.log('First name:', fname);
    console.log('Last name:', lname);
    console.log('Email:', email);
    res.redirect('/success');
};