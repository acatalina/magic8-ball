const React = require('react');

var Answer = React.createClass({
  render () {
    return (
      <div className="answer-wrapper">
        <span className={this.props.answerClass}>{this.props.answer}</span>
      </div>
    );
  }
});

module.exports = Answer;