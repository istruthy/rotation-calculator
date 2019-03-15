import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

const TimerInterface = props => {
  return (
    <div style={{ width: 'auto' }}>
      <CircularProgressbar
        percentage={props.percentRemaining}
        text={`${props.minutes}:${props.seconds}`}
        background
        backgroundPadding={6}
        styles={{
          background: {
            fill: '#3e98c7'
          },
          text: {
            fill: '#fff'
          },
          path: {
            stroke: '#fff'
          },
          trail: { stroke: 'transparent' }
        }}
      />
    </div>
  );
};

export default TimerInterface;
