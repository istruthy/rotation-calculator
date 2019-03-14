import React, { Component } from 'react';
import Timer from './components/Timer';
import TimerInput from './components/TimerInput';
import StartButton from './components/StartButton';
import TimerWarningInput from './components/TimerWarningInput';
// import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Segment } from 'semantic-ui-react';

// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '15',
      warning: '14',
      clearnup: '1',
      isClicked: false
    };
    this.secondsRemaining = null;
    this.intervalHandle = null;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event) {
    console.log('handleChange', event);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;

    this.setState({
      minutes: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: '0' + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        minutes: '0' + min
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
    this.setState({
      isClicked: true
    });
  }

  render() {
    const { minutes, warning, seconds, isClicked } = this.state;

    let backGroundColor = '#333';
    if (minutes < warning) {
      backGroundColor = '#999';
    }
    if (isClicked) {
      return (
        <div>
          <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

          <Grid centered columns={2}>
            <Grid.Column textAlign="center">
              <div style={{ backgroundColor: backGroundColor }}>
                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      );
    } else {
      return (
        <div>
          <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

          <Grid centered style={{ height: '100%' }} verticalAlign="middle">
            <Grid.Column textAlign="center">
              <div>
                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <TimerInput minutes={this.state.minutes} handleChange={this.handleChange} />
                    <TimerWarningInput warning={warning} handleChange={this.handleChange} />
                    <Timer minutes={minutes} seconds={seconds} />
                    <StartButton startCountDown={this.startCountDown} minutes={minutes} />
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      );
    }
  }
}

export default App;
