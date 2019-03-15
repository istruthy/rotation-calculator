import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const TimerWarningInput = props => {
  return (
    <Form.Group>
      <Input
        inline
        label="Warning"
        // icon="stopwatch"
        position="left"
        control="input"
        placeholder="warning"
        type="text"
        name="warning"
        value={props.warning}
        onChange={props.handleChange}
      />
    </Form.Group>
  );
};

export default TimerWarningInput;
