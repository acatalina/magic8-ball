const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');
const ANSWERS = require('./ANSWERS');

ReactDOM.render(
  <App answers={ANSWERS} />,
  document.getElementById('root')
);
