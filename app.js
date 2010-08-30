(function() {
  $(function() {
    var dg, vis;
    dg = new uv.DataGraph(activities_fixture);
    vis = new ActivityPlot(dg);
    return vis.render();
  });
})();
