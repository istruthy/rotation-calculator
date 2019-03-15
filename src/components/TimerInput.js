import React from 'react';
import { Input, Label } from 'semantic-ui-react';

const TimerInput = props => {
  return (
    <div>
      <Input
        labelPosition="right"
        placeholder="15"
        type="number"
        name="minutes"
        value={props.minutes}
        onChange={props.handleChange}
        required
      >
        <Label basic>Minutes</Label>
        <input />
        <Label>:00</Label>
      </Input>
    </div>
  );
};

export default TimerInput;
