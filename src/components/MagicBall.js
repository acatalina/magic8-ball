const React = require('react');
const Answer = require('./Answer');

const MagicBall = React.createClass({
  getInitialState () {
    return {
      foreseeing: false,
      eightClass: 'eight',
      answerClass: 'answer',
      ballClass: 'ball'
    };
  },
  render () {
    return (
      <div className={this.state.ballClass} onClick={this.clickHandler}>
        <div className={this.state.eightClass}><span>8</span></div>
        <Answer answerClass={this.state.answerClass} answer={this.foresee(this.props.answers)} />
      </div>
    );
  },
  foresee (answers) {
    let foresightIndex = this.foreseeIndex(this.props.answers.length);
    
    return answers[foresightIndex];
  },
  foreseeIndex (n) {
    return Math.round(Math.random() * (n - 1));
  },
  clickHandler () {
    if (this.state.foreseeing) {
      this.setState({
        foreseeing: !this.state.foreseeing,
        eightClass: 'eight eight-hidden',
        answerClass: 'answer answer-notHidden',
        ballClass: 'ball ball-shake'
      });
    } else {
      this.setState({
        foreseeing: !this.state.foreseeing,
        eightClass: 'eight',
        answerClass: 'answer',
        ballClass: 'ball'
      });
    }
  }
});

module.exports = MagicBall;