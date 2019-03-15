import React from 'react';
import { Input, Label } from 'semantic-ui-react';

const TimerWarningInput = props => {
  return (
    <Input
      labelPosition="right"
      placeholder="15"
      type="number"
      name="warning"
      value={props.warning}
      onChange={props.handleChange}
      required
    >
      <Label basic>Warning</Label>
      <input />
      <Label>:00</Label>
    </Input>
  );
};

export default TimerWarningInput;
