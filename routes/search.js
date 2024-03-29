var express = require('express');
var request = require('request-promise');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var rbl = (req.query.rbl || '');

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
      res.status(400).send('error' + err);
    });

});

module.exports = router;
