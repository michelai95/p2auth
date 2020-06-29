// require express
const express = require('express')
// import router 
const router = express.Router()
// import db
const db = require('../models')
// import middleware 

// register get route 
router.get('/register', function (req, res) {
    res.render('auth/login')
})
// register post route 

// login get route
// login post route 