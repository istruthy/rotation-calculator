import React from 'react';
import { Form, Input } from 'semantic-ui-react';
const TimerCleanupInput = props => {
  return (
    <Form.Group>
      <Input
        inline
        label="Clean up"
        control="input"
        placeholder="Cleanup"
        value={props.cleanup}
        name="cleanup"
        onChange={props.handleChange}
      />
    </Form.Group>
  );
};

export default TimerCleanupInput;
