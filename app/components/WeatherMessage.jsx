var React = require('react');

var WeatherMessage = ({temp, location}) => {           //stateless components + destructuring
    return (
      <h3 className="text-center">It's {temp} in {location}</h3>
    )
  };

module.exports = WeatherMessage;
