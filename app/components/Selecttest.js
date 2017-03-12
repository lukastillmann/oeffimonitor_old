var React = require('react');
var Select = require('react-select');
var Select2 = require('react-select2-wrapper');
import 'react-select2-wrapper/css/select2.css';
import 'react-select/dist/react-select.css';


const options = [
  {value: 'one', name: 'One' },
  {value: 'two', name:'Two'}
];



var SearchContainer = React.createClass({
  render: function() {
    return (
      <div>
        <Select2
          options={
            {
              placeholder: 'search by tags',
              ajax: {
                url: "wl.json",
                dataType: 'json',
                processResults: function(data) {
                  console.log(data);
                  var arr = data.map(function(obj) {
                    return {
                      id: obj.stationID,
                      text: obj.name
                    };
                  });
                  return {
                    results: arr
                  };
                }
              }
            }
          }
        />
        <Select
          name="react-select-form"
          options={options}
          onChange={(val) => console.log(val)}
        />

      </div>
    )
  }
})
module.exports = SearchContainer;
