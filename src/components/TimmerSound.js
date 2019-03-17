import React from 'react';
import Sound from 'react-sound';

const TimerSound = props => {
  if (props.warningStatus) {
    return <Sound url="bensound-slowmotion.mp3" playStatus={Sound.status.PLAYING} />;
  } else {
    return null;
  }
};

export default TimerSound;
