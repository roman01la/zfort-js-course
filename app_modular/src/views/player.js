var View = require('../awesome_zfort_framework/view');

function renderPlayer(target, ) {
  return new View({
    el: target,
    template: (
      '<span class="player">' +
        '<div>' +
          '<span class="time">00:00</span>' +
          '<button class="btn play">PLAY</button>' +
          '<button class="btn next">NEXT</button>' +
          '<button class="btn prev">PREV</button>' +
        '</div>' +
      '</span>'
    ),
    listeners: {
      'play': {
        type: 'click',
        handler: _handlePlaybackChange
      }
    }
  });
}

module.exports = PlayerView;
