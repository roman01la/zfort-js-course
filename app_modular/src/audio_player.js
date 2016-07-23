var PlayerView = require('./views/player');

var AudioPlayer = function(target, element) {
  this._element = element;
}

AudioPlayer.prototype.setPlaylist = function (playlist) {
  this._playlist = playlist;
};

module.exports = AudioPlayer;
