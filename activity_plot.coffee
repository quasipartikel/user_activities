class ActivityPlot
  constructor: (@dataGraph) ->
    @build()
    @update()
    
    @users = @dataGraph.all('resources').select (key, res) ->
      res.type.key == '/type/user'

  update: () ->
    # setup the plot
  build: ->
    @scene = new uv.Scene {
      displays: [{
        container: 'canvas',
        width: 700,
        height: 250
      }]
      fillStyle: '#ccc'
    }

  render: ->
    @scene.start()

# Exports
window.ActivityPlot = ActivityPlot