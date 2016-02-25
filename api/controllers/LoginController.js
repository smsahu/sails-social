/**
 * AuthController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
"use strict";
var sails = require('sails');
var LoginController = (function () {
    function LoginController() {
    }
    // Login screen
    LoginController.prototype.index = function (req, res) {
        var enableLocalAuth = sails.config.authEnabled.local;
        var enableTwitterAuth = sails.config.authEnabled.twitter;
        var enableFacebookAuth = sails.config.authEnabled.facebook;
        console.log("+ AUTH.LOGIN (empty credentials)");
        return res.view({
            enableLocalAuth: enableLocalAuth,
            enableTwitterAuth: enableTwitterAuth,
            enableFacebookAuth: enableFacebookAuth
        });
    };
    return LoginController;
}());
exports.LoginController = LoginController;
module.exports = new LoginController();
