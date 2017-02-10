var React = require('react');
var Nav = require('Nav');

var Main = (props) => {             //stateless components
  return (
    <div>
      <Nav/>
      <h2>Main component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
