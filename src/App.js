import React, { Component } from 'react';
import Timer from './components/Timer';
import TimerInput from './components/TimerInput';
import StartButton from './components/StartButton';
import TimerWarningInput from './components/TimerWarningInput';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Form } from 'semantic-ui-react';
import TimerCleanupInput from './components/TimerCleanupInput';
import TimerInterface from './components/TimerInterface';
import TimerSound from './components/TimmerSound';
import RotationInput from './components/RotationInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '15',
      currentMinutes: '14',
      warning: '14',
      cleanup: '1',
      rotations: '4',
      secondsRemaining: null,
      warningStatus: false,
      cleanupStatus: false,
      isClicked: false
    };
    this.secondsRemaining = null;
    this.intervalHandle = null;
  }

  handleChange = event => {
    console.log('handleChange', event);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  tick = () => {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - min * 60;

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
      if (this.state.rotations > 0) {
        this.startCountDown();
      } else {
        clearInterval(this.intervalHandle);
      }
    }

    this.secondsRemaining--;
  };

  startCountDown = () => {
    let time = this.state.currentMinutes;
    let warning = this.state.warning;
    let rotations = this.state.rotations;
    this.intervalHandle = setInterval(this.tick, 1000);
    this.secondsRemaining = time * 60;

    if (warning < 10) {
      this.setState({
        warning: '0' + warning
      });
    }

    this.setState({
      isClicked: true,
      rotations: rotations--
    });
  };

  render() {
    const {
      minutes,
      warning,
      seconds,
      isClicked,
      secondsRemaining,
      cleanup,
      warningStatus,
      rotations,
      currentMinutes
    } = this.state;
    const warningAlert = warning * 60;
    let percentRemaining = Math.round((secondsRemaining / warningAlert) * 100);
    let backGroundColor = '#6aff00';

    if (minutes < warning) {
      backGroundColor = '#ffe900';
    }

    if (isClicked) {
      console.log('state ', this.state);
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
                      minutes={minutes}
                      seconds={seconds}
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
        <Grid verticalAlign="middle" columns={4} centered>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <TimerInput minutes={currentMinutes} handleChange={this.handleChange} />
                <TimerWarningInput warning={warning} handleChange={this.handleChange} />
                <TimerCleanupInput cleanup={cleanup} handleChange={this.handleChange} />
                <RotationInput rotations={rotations} handleChange={this.handleChange} />
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
