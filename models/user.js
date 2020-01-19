// Create the user schema and the model.
/**We'll create a simple user schema which tracks the username and 
 * password, and also a flag that is set to indicate whether the user
 *  is an administrator or a normal user. 
 * So, this is one way of distinguishing among different user types.*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');



var User = new Schema({
/** we can remove the username and password because these would be automatically 
 * added in by the passport-local-mongoose plugin here and to use that as a plugin 
 * in our mongoose schema and model. */
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    /**When a user passes in the access token, then you're going to be fetching the 
     * profile and then setting up an account for that user in our local server here, 
     * in our express server here. 
     * Of course this particular account will not have a password or rather the hash 
     * installed associated with this (it don't have a password from facebook).*/
    facebookId: String,
    admin: {
        type: Boolean,
        default: false
    }
});

/**  this will automatically as I said adding support for username and hashed storage of 
 * the password using the hash and salt and adding additional methods on the user schema 
 * and the model which are useful for passport authentication */
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);