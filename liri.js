require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var getSong = function(userData) { 
    var spotify = new Spotify(keys.spotify);

    spotify
    .search({ type: 'track', query: userData })
    .then(function(response) {
        // for (var i = 0; i < response.length; i++) {
        //     console.log("Artist: " + response.tracks.items[i]);
        // }
        console.log(response.tracks.items[0]);
    })
    .catch(function(err) {
        console.log(err);
    });
};

var getCommand = function(userDataOne, userDataTwo) {
    switch(userDataOne) {
        case "spotify-this-song" :
            getSong(userDataTwo);
            break;
        default:
            console.log("LIRI doesn't seem to know that");
    }
};

var getUserData = function() {
    getCommand(process.argv[2], process.argv[3]);
};

getUserData();
