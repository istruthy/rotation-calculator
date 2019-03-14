import React from 'react';

const TimerWarningInput = props => {
  return (
    <div style={{ marginLeft: 100 }}>
      <h3>Input the warning time</h3>
      <input type="number" name="warning" value={props.warning} onChange={props.handleChange} required />
    </div>
  );
};

export default TimerWarningInput;
