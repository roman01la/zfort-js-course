function makePlayer(playlist) {

  var container = document.createElement('div');

  container.innerHTML = (
    '<span class="player">' +
      '<div>' +
        '<span class="time">00:00</span>' +
        '<button class="btn play">PLAY</button>' +
        '<button class="btn next">NEXT</button>' +
        '<button class="btn prev">PREV</button>' +
      '</div>' +
      playlist +
    '</span>'
  );

  return container;
}

function makePlaylist() {

  return (
    '<div class="playlist">' +
      '<ul class="list">' +
      '</ul>' +
    '</div>'
  );
}

module.exports = {
  makePlayer: makePlayer,
  makePlaylist: makePlaylist,
};
