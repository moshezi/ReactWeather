var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>                    //the / sign is our root app
      <Route path="about" component={About}/>           // when we have just / it is the root app and will render Main component if we have /about we will render About component if we have just / we will render Weather component
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>                 //if it does not match about or examples components it renders the weather component inside the main component
    </Route>
  </Router>,
  document.getElementById('app')
);
