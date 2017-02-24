var React = require('react');

const DATA = {
  line: 45,
  towards: 'Schottentor',
  min_next: 15,
  min_afternext: 25,
  station: 'Haberlgasse'
}


var CardHeader = React.createClass({
  render: function() {
    return (
      <div className="card__header">
        <div className="card__flex card__flex--first">
          <div className="card__line">
            {this.props.line}
          </div>
        </div>
        <div className="card__flex card__flex--second">
          <div className="card__dirtitle">
            Richtung
          </div>  
          <h1 className="card__dirname">
            {this.props.towards}
          </h1>
        </div>
      </div>
    )
  }
});

var CardBody = React.createClass({
  render: function() {
    return (
      <div className="card__body">
        <div className="card__flex card__flex--pre">
        </div>
        <div className="card__flex card__flex--main">
          <div className="card_bodytitle">
            Nächste Fahrt in 
          </div>
          <div className="card__minnumber">
            {this.props.min_next}
          </div>
          <div className="card__mintext">
            min
          </div>
        </div>
        <div className="card__flex card__flex--suf">
          <div>
            dann in 
          </div>
          <div className="card__minnumber card__minnumber--next">
            {this.props.min_afternext}
          </div>
          <div className="card__mintext card__mintext--next">
            min
          </div>
        </div>
      </div>
    )
  }
});

var CardFooter = React.createClass({
  render: function() {
    return (
      <div className="card__footer">
        {this.props.station}
      </div>
    )
  }
});


var Card = React.createClass({
  render: function() {
    return (
      <div className="card">
        <CardHeader line={this.props.model.line} towards={this.props.model.towards}/>
        <CardBody min_next={this.props.model.min_next} min_afternext = {this.props.model.min_afternext}/>
        <CardFooter station={this.props.model.station}/>
      </div>
    )
  }
});

var CardsContainer = React.createClass({
  getInitialState: function() {
    var out = {
      line: '-',
      towards : 'loading.',
      min_next: '-',
      min_afternext: '-',
      station: 'loading..'
    };
    return out;
  },
  loadData: function() {
    var rbl = this.props.location.query.rbl || '';
    var that = this;
    fetch('/search?rbl=' + rbl).then(
      function(response) {
        var data = {
          rbl: rbl,
          line: '45',
          towards : 'Sch',
          min_next: '3',
          min_afternext: '3',
          station: 'Haberl'
        };
        // this.setState(data);
        var _this = that;
        response.json().then(function(json) {
          console.log('response:', json.data.monitors);
          data.station = json.data.monitors[0].locationStop.properties.title;
          data.line = json.data.monitors[0].lines[0].name;
          data.towards = json.data.monitors[0].lines[0].towards;
          data.min_next = json.data.monitors[0].lines[0].departures.departure[0].departureTime.countdown;
          data.min_afternext = json.data.monitors[0].lines[0].departures.departure[1].departureTime.countdown;
          _this.setState(data);
        })
      }
    )
  },
  componentDidMount: function() {
    this.loadData();
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (prevState.rbl && this.props.location.query.rbl !== prevState.rbl) {
      this.loadData();
    }
  },
  render: function() {
    return (
      <div>
        <Card model={this.state} />
      </div>
      )
  }
});


module.exports = CardsContainer;
