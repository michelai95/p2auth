// import necessary libraries and modules
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
// should be capitalized since it's a full built in class that we're going to use from passport 
const db = require('../models')
// serialize the user 
passport.serializeUser(function(user, cb) {
    cb(null, user.id)
    // cb = callback
})
// deserialized version
passport.deserializeUser(function(id, cb) {
    db.user.findByPk(id).then(function(user) {
        cb(null, user)
    }).catch(callback)
})

// configure local variables/settings
// password local config
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function(email, password, callback) {
    db.user.findOne({where: { email }}).then(function(user) {
        if (!user || !user.validPassword(password)) {
            callback(null, false)
        } else {
            callback(null, user)
        }
    }).catch(callback)
}
))


module.exports = passport

// serialize - deserialize 
// when you're sending info to a client, given in a certain order 
// server sending and requestion info from the front end and back end 
// have to keep the data concise and in order 
// examples include passport and JSON