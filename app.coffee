# renderSettings = (c) ->
#   props = c.all('properties').select (key, p) ->
#     return p.type == 'number' && p.unique
#   
#   options = ''
#   props.each (index, p) ->
#     options += "<option value=\"#{p.key}\">#{p.name}</option>"
# 
#   $settings = $('<h3>Property</h3><select id="property">'+options+'</select>')
#   $('#sidebar').append($settings)
  
# DOM Ready
$ ->
  dg = new uv.DataGraph(activities_fixture)
  # renderSettings(c)
  
  vis = new ActivityPlot(dg)
  vis.render()
  
  # Property selection change
  # $('#property').change ->
  #   vis.update $(this).val()
