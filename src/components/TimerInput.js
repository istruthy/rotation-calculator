import React from 'react';
import { Input } from 'semantic-ui-react';

const TimerInput = props => {
  return (
    <div>
      <h3>Input your desired time</h3>
      <Input label="http://" placeholder="mysite.com" />
      <input type="number" name="minutes" value={props.minutes} onChange={props.handleChange} required />
    </div>
  );
};

export default TimerInput;
