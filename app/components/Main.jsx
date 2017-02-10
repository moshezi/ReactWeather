var React = require('react');
var Nav = require('Nav');

var Main = (props) => {             //stateless components
  return (
    <div>
      <Nav/>
      <div ClassName="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
