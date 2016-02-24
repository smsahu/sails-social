/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    // Index page
    index: function (req, res) {

        console.log("+ HOME.INDEX");

        var enableLocalAuth = sails.config.authEnabled.local;
        var enableTwitterAuth = sails.config.authEnabled.twitter;
        var enableFacebookAuth = sails.config.authEnabled.facebook;

        var localAuthMsg, twitterAuthMsg, facebookAuthMsg;

        if (enableLocalAuth) localAuthMsg = "Configuration Ok";
        else localAuthMsg = "Disabled";

        if (enableTwitterAuth) twitterAuthMsg = "Configuration Ok";
        else twitterAuthMsg = "Disabled";

        if (enableFacebookAuth) facebookAuthMsg = "Configuration Ok";
        else facebookAuthMsg = "Disabled";

        return res.view({
            enableLocalAuth: enableLocalAuth,
            enableTwitterAuth: enableTwitterAuth,
            enableFacebookAuth: enableFacebookAuth,
            localAuthMsg: localAuthMsg,
            twitterAuthMsg: twitterAuthMsg,
            facebookAuthMsg: facebookAuthMsg
        });
    }
};

