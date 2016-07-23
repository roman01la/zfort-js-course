/*

config = {
  el: String,
  template: String,
  listeners: {
    'btn': {
      type: 'click',
      handler: function() {}
    }
  }
}

*/

var View = function(config) {

  this._config = config;

  var container = document.querySelector(config.el)

  container.innerHTML = config.template;

  this._eventHandlers = Object.keys(config.listeners)
    .map(function(className) {

      var handlerConfig = config.listeners[className];
      var element = container.querySelector('.' + className);

      element.addEventListener(handlerConfig.type, handlerConfig.handler);

      return {
        element: element,
        handlerConfig: handlerConfig
      };
    });
}

View.prototype.remove = function() {
  this._eventHandlers.forEach(function(config) {
    config.element.removeEventListener(
      config.handlerConfig.type,
      config.handlerConfig.handler);
  });
  this._config.el.innerHTML = '';
}

module.exports = View;
