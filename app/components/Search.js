var React = require('react');
var Select = require('react-select');
import 'react-select/dist/react-select.css';

const getStations = function() {
  return fetch('/wl.json')
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        var arr = [];
        arr = json.map(function(obj) {
          return {
            value: obj.stationID,
            name: obj.name
          } 
        });
        /*
        arr = [
          {value: 'one', name: 'One' },
          {value: 'two', name:'Two'}
        ];
        */
        console.log(arr);
        return { options: arr};
    });
}

const testOptions = [
      {value: 'one', name: 'One' },
      {value: 'two', name:'Two'}
    ];


var Search = React.createClass({
  render: function() {
    return (
      <div className="search">
        <div className="search__title">Haltestelle suchen</div>
        <input type="text" className="search__input"/>
        <div className="search__results">
        </div>
      </div>
    )
  }
});

var SearchContainer = React.createClass({
  onChange: function(event) {
    console.log('change');
  },
  logChange: function(val) {
    console.log("Selected: " + val.name);
  },
  render: function() {
    return (
      <div>
        <Search />
        <Select.Async
          name="form-field-name"
          loadOptions = {getStations}
          onChange={this.logChange}
        />
      </div>
      )
  }
});


module.exports = SearchContainer;
