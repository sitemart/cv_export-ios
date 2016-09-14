function offline() {
Parse.initialize("chealsea1984@jaramaGr");
    Parse.serverURL = 'http://localhost:1337/parse';
    var serverDomain = 'http://localhost:1337/parse';
    var owner = Parse.User.current();
    var appID = 'chealsea1984@jaramaGr';
    var restID = 'restid';
}

Parse.initialize("chealsea1984@jaramaGr");
Parse.serverURL = 'http://api.cvapp.info';
var serverDomain = 'http://api.cvapp.info';
var owner = Parse.User.current();
var appID = 'chealsea1984@jaramaGr';
var restID = 'restid';


var username = $('.username').val();
var password = $('.password').val();

// Session Token
var serialisedData = localStorage.getItem("Parse/" + appID + "/currentUser");
// then deserialise it
var data = JSON.parse(serialisedData);
if (!data) {
    // redirect, data is empty
} else {
    var sessionTOKEN = data.sessionToken;
    var sessionEMAIL = data.email;
    var userID = data.objectId;
}
var config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': appID,
        'X-Parse-REST-API-Key': restID,
        'X-Parse-Session-Token': sessionTOKEN
    }
};

var configParams = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': appID,
    'X-Parse-REST-API-Key': restID,
    'X-Parse-Session-Token': sessionTOKEN

};

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])
    .run(function ($ionicPlatform, $location, $rootScope, $urlRouter) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    });