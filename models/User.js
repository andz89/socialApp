// const usersCollection = require('../db').collection('users');

let validate = require('validator');

let User = function(data) {
    this.data = data;
    this.errors = []
};
// User.prototype.cleanUp() = function() {
//     if(typeof(this.data.username) != 'string') {
//         this.data.username = ""
//     };
//     if(typeof(this.data.email) != 'string') {
//         this.data.email = ""
//     };
//     if(typeof(this.data.password) != 'string') {
//         this.data.password = ""
//     };

//     this.data = {
//         username: this.data.username.trim().toLowerCase(),
//         email: this.data.email.trim().toLowerCase(),
//         password: this.data.password
//     }

// }
User.prototype.validate = function() {
    // if inputs are empty
    if(this.data.username === "") {
        this.errors.push('You must provide username.')
    };
    if(this.data.username != "" && ! validate.isAlphanumeric(this.data.username)) {
        this.errors.push('username can only contain numbers and letters.')
    };
    if(! validate.isEmail(this.data.email)) {
        this.errors.push('You must provide a valid email address.')
    };
    if(this.data.password === "") {
        this.errors.push('You must provide a password.')
    };

    // length of input password
    if(this.data.password.length > 0 && this.data.password.length < 12) {
        this.errors.push("you must povide atleast 12 characters in your password");
    }
    if(this.data.password.length > 100) {
        this.errors.push("Password cannot exceed 100 characters");
    }
    // length of input username
    if(this.data.username.length > 0 && this.data.username.length < 3) {
        this.errors.push("you must povide atleast 3 characters in your username");
    }
    if(this.data.username.length > 30) {
        this.errors.push("username cannot exceed 30 characters");
    }
};
User.prototype.register = function() {
    // this.cleanUp()
    this.validate();

}
module.exports = User;
