// Spotiphy
// Giphy but Spotify
const SpotifyWebApi = require('spotify-web-api-node');
const unauthenticatedSpotifyAPI = new SpotifyWebApi();

module.exports = function(robot){
  robot.hear(/spotiphy (.*)/i, function(res){
    const query = res.match[1];
    unauthenticatedSpotifyAPI.searchTracks(query)
      .then(function(data){
        res.send(data.body.tracks.items[0].external_urls.spotify);
      }, function(err){
        res.send(":spotify: fail");
      });
  });
}
