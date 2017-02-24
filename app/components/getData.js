/*
var loadJSONP = (function(){
  var unique = 0;
  return function(url, callback, context) {
    // INIT
    var name = "_jsonp_" + unique++;
    if (url.match(/\?/)) url += "&callback="+name;
    else url += "?callback="+name;
    
    // Create script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    
    // Setup handler
    window[name] = function(data){
      callback.call((context || window), data);
      document.getElementsByTagName('head')[0].removeChild(script);
      script = null;
      delete window[name];
    };
    
    // Load JSON
    document.getElementsByTagName('head')[0].appendChild(script);
  };
})();
*/

/*
module.exports = function(id, cb) {
  var qid = id || '754';
  var queryurl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D'http%3A%2F%2Fwww.wienerlinien.at%2Fogd_realtime%2Fmonitor%3Frbl%3D" + qid + "%26activateTrafficInfo%3Dstoerungkurz%26activateTrafficInfo%3Dstoerunglang%26activateTrafficInfo%3Daufzugsinfo%26sender%3DdqvZqWbKGu'&format=json&diagnostics=true";
  var data = {
    line: '',
    towards : '',
    min_next: '',
    min_afternext: '',
    station: ''
  };
  loadJSONP(
    queryurl,
    function(d) {
      var model = d.query.results.json.data;
      data.station = model.monitors.locationStop.properties.title;
      data.line = model.monitors.lines.name;
      data.towards = model.monitors.lines.towards;
      data.min_next = model.monitors.lines.departures.departure[0].departureTime.countdown;
      data.min_afternext = model.monitors.lines.departures.departure[1].departureTime.countdown;
      cb(data);
//      console.log('station: ' + data.station);
//      console.log('line: ' + data.line);
//      console.log('Direction: ' + data.towards);
//      console.log('next run in: ' + data.min_next);
//      console.log('after that: ' + data.min_afternext);
    }
  );
};

module.exports = function(id) {
  const DATA = {
    line: 45,
    towards: 'Schottentor',
    min_next: 15,
    min_afternext: 25,
    station: 'Haberlgasse'
  }

  return DATA;
}
/**/
