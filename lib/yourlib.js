var Cell = function() {
  var self = {
    alive: false,
    isAlive: function() { return this.alive; },
    tick: function(n) { 
      this.alive = (
        (this.alive && n >= 2 && n < 4) ||
        (n == 3)
      );

      return this;
    }
  };
  return self;
};
