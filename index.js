// configure dotenv
require('dotenv').config()
// require express and setup express app instance 
const Express = require('express')
// require and set view engine using ejs
const ejsLayouts = require('express-ejs-layouts')
// set app to use false URL encoding 
// set app public directory for use 
// set app ejs layouts for render 

const app = Express()
app.use(Express.urlencoded({ extended: false}))
app.use(Express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/', (req, res) => {
    // check to see if user has logged in
    // renders the index page 
    res.render('index')
})

// initialize app on port
app.listen(process.env.PORT || 3000, () => {
    console.log(`port ${process.env.PORT}`)
})