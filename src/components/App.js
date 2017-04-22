var React = require('react');
const MagicBall = require('./MagicBall');
require('../css/normalize.css');
require('../css/App.css');

var App = React.createClass({
  getInitialState () {
    return {
      answers: this.props.answers,
    };
  },
  render () {
    return (
      <div className="main-wrapper">
        <header>Drasek presents... Magic 8 Ball</header>
        <content className="content">
          <div className="info">They say that knowing the future will always
            bring misery...
          </div>
          <div className="info">but if you are brave
            enough to ask the magic ball, just think very carefully and click 
            on to reveal what your future holds...
          </div>
          <MagicBall answers={this.state.answers} />
        </content>
        <footer>
          <p className="created">Created and Coded by:
            <a href="https://github.com/acatalina">Drasek</a>
          </p>
        </footer>
      </div>
    );
  }
});

App.propTypes = {
  answers: React.PropTypes.array.isRequired
};

module.exports = App;
