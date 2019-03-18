import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const TimerInput = props => {
  return (
    <Form.Group>
      <Input
        inline
        label="Minutes"
        control="input"
        placeholder="minutes"
        type="number"
        name="currentMinutes"
        value={props.currentMinutes}
        onChange={props.handleChange}
      />
    </Form.Group>
  );
};

export default TimerInput;
