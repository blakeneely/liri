require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var getArtist = function(artist) {
    return artist.name;
}
var getSong = function(songName) { 
    var spotify = new Spotify(keys.spotify);

    spotify
    .search({ type: 'track', query: songName })
    .then(function(response) {
        var songs = response.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log("Artist: " + songs[i].artists.map(getArtist));
            console.log("Song Name: " + songs[i].name);
            console.log("Album: " + songs[i].album.name);
            console.log("Preview Song: " + songs[i].preview_url);
            console.log("------------------------------------------------------")
        }
    })
    .catch(function(err) {
        console.log(err);
    });
};

var runLiri = function(userDataOne, userDataTwo) {
    switch(userDataOne) {
        case "spotify-this-song" :
            getSong(userDataTwo);
            break;
        default:
            console.log("LIRI doesn't seem to know that");
    }
}; 

var getUserData = function() {
    runLiri(process.argv[2], process.argv[3]);
};

getUserData();
