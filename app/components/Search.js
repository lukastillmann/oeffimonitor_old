var React = require('react');
var Select = require('react-select');
var Fuse = require('fuse.js');
import 'react-select/dist/react-select.css';

const getStations = function() {
  return fetch('/wl.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
      let arr = [];
      arr = json.map(function(obj) {
        return {
          value: obj.stationID,
          name: obj.name
        } 
      });
      return arr;
    });
}

const testOptions = [
      {value: 'one', name: 'One' },
      {value: 'two', name:'Two'}
    ];

var SearchContainer = React.createClass({
  getInitialState: function() {
    var results = {
      name: '',
      value: ''
    };
    return results;
  },
  handleSearchInput: function(event) {
    event.persist()
    var that = this;
    getStations()
      .then(function(stations) {
        var options = {
          shouldSort: true,
          threshold: 0.2,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
              "name"
          ]
        };
        var fuse = new Fuse(stations, options); // "list" is the item array
        var result = fuse.search(event.target.value);
        that.setState({results: result});
      });
    //this.searchItems(event.target.value);
  },
  render: function() {
    return (
      <div>
        <SearchInput onKeyUp={this.handleSearchInput}/>
        <SearchResults results={this.state.results}/>
      </div>
      )
  }
});

var SearchInput = React.createClass({
  render: function() {
    return (
      <div className="search">
        <div className="search__title">Haltestelle suchen</div>
        <input type="text" className="search__input" onKeyUp={this.props.onKeyUp}/>
      </div>
    )
  }
});

var SearchResults = React.createClass({
  listItems: function() {
    if (this.props.results) {
      return this.props.results.map(function(item) {
        return <li key={item.value}>{item.name}</li>
      });
    }
  },
  render: function() {
    var list = this.listItems();
    return (
      <div>
      results
      <ul>
      {list}
      </ul>
      </div>
    )
  }
})

module.exports = SearchContainer;
