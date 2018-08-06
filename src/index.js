$(document).ready(function() {
  $.get('https://cdn.optimizely.com/public/8135581546/s/10142920248_10142920248.json', function(datafile, status) {
    window.optimizelyClientInstance = optimizelyClient.createInstance({ datafile: datafile })
    var variation = window.optimizelyClientInstance.activate('integration test', '123')
    console.log(variation)
  })
})