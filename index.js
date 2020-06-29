// required NPM libraries
// configure dotenv
require('dotenv').config()
// require express and setup express app instance 
const Express = require('express')
// require and set view engine using ejs
const ejsLayouts = require('express-ejs-layouts')
// require all middleware for app/authentication 
// helmet, morgan, passport, and custom middleware for people being logged in long term
const helmet = require('helmet')
// express sessions/sequelize sessions 
const session = require('express-session')
const flash = require('flash')

// app setup
const app = Express()
// set app to use false URL encoding 
app.use(Express.urlencoded({ extended: false}))
// set app public directory for use 
app.use(Express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
// set app ejs layouts for render 
app.use(ejsLayouts)
app.use(require('morgan')('dev'))
app.use(helmet())


app.get('/', (req, res) => {
    // check to see if user has logged in
    // renders the index page 
    res.render('index')
})

// initialize app on port
app.listen(process.env.PORT || 3000, () => {
    console.log(`port ${process.env.PORT}`)
})