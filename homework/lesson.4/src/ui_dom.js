function defineUI(player) {
  this._controls = {
    playback: player.querySelector('.play'),
    next: player.querySelector('.next'),
    prev: player.querySelector('.prev'),
  };

  this._display = {
    time: player.querySelector('.time'),
    playlist: player.querySelector('.playlist .list'),
  };
}

module.exports = defineUI;
