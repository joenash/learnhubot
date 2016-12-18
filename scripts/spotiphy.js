// Spotiphy
// Giphy but Spotify
const SpotifyWebApi = require('spotify-web-api-node');
const unauthenticatedSpotifyAPI = SpotifyWebApi();

module.exports = (robot) => {
  robot.hear(/spotiphy (.*)/i, (res) => {
    const query = res.match[0];
    spotifyApi.searchTracks(query)
      .then(function(data) {
        res.send(data.tracks.items[0].external_urls.spotify);
      }, function(err) {
        res.send(":spotify: fail");
      });
  }
}
