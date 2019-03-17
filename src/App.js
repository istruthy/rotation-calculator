import React, { Component } from 'react';
import Timer from './components/Timer';
import TimerInput from './components/TimerInput';
import StartButton from './components/StartButton';
import TimerWarningInput from './components/TimerWarningInput';
// import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Form } from 'semantic-ui-react';
import TimerCleanupInput from './components/TimerCleanupInput';
import TimerInterface from './components/TimerInterface';
import TimerSound from './components/TimmerSound';

// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '15',
      warning: '14',
      cleanup: '1',
      secondsRemaining: null,
      warningStatus: false,
      cleanupStatus: false,
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
    console.log('seconds remaining ', this.secondsRemaining);

    this.setState({
      minutes: min,
      seconds: sec,
      secondsRemaining: this.secondsRemaining
    });
    if (this.state.minutes < this.state.warning) {
      this.setState({
        warningStatus: true
      });
    }
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
    const { minutes, warning, seconds, isClicked, secondsRemaining, cleanup, warningStatus } = this.state;
    let percentRemaining = Math.round((secondsRemaining / 900) * 100);
    // console.log('percent remaing', percentRemaining);

    let backGroundColor = '#6aff00';
    if (minutes < warning) {
      backGroundColor = '#ffe900';
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
      ui.statistic value {
        font-size: 5em!important;
      }
    `}</style>
          <Grid centered columns={2}>
            <Grid.Column textAlign="center">
              <div>
                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <TimerInterface
                      percentRemaining={percentRemaining}
                      minutes={this.state.minutes}
                      seconds={this.state.seconds}
                      backGroundColor={backGroundColor}
                    />
                    {/* <Timer minutes={this.state.minutes} seconds={this.state.seconds} /> */}
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid>
          <TimerSound warningStatus={warningStatus} />
        </div>
      );
    } else {
      return (
        // <div>
        //   <style>{`
        //   body > div,
        //   body > div > div,
        //   body > div > div > div.login-form {
        //     height: 100%;
        //   }
        // `}</style>

        <Grid verticalAlign="middle" columns={4} centered>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <TimerInput minutes={this.state.minutes} handleChange={this.handleChange} />
                <TimerWarningInput warning={warning} handleChange={this.handleChange} />
                <TimerCleanupInput cleanup={cleanup} handleChange={this.handleChange} />
                <StartButton startCountDown={this.startCountDown} minutes={minutes} />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  }
}

export default App;
