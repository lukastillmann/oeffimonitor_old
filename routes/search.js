var express = require('express');
var request = require('request-promise');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var rbl = (req.query.rbl || '0');
  var queryurl = "http://www.wienerlinien.at/ogd_realtime/monitor?rbl=147&sender=dqvZqWbKGu";

  var options = {
    uri: 'http://www.wienerlinien.at/ogd_realtime/monitor',
    qs: {
      rbl: rbl,
      sender: 'dqvZqWbKGu'
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };

  request(options)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      console.log('failed');
      res.send('sorry, request failed: ' + err);
    });

});

module.exports = router;
