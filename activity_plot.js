(function() {
  var ActivityPlot;
  ActivityPlot = function(_a) {
    this.dataGraph = _a;
    this.build();
    this.update();
    this.users = this.dataGraph.all('resources').select(function(key, res) {
      return res.type.key === '/type/user';
    });
    return this;
  };
  ActivityPlot.prototype.update = function() {};
  ActivityPlot.prototype.build = function() {
    return (this.scene = new uv.Scene({
      displays: [
        {
          container: 'canvas',
          width: 700,
          height: 250
        }
      ],
      fillStyle: '#ccc'
    }));
  };
  ActivityPlot.prototype.render = function() {
    return this.scene.start();
  };
  window.ActivityPlot = ActivityPlot;
})();
