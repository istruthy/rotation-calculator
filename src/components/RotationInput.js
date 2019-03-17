import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const RotationInput = props => {
  return (
    <Form.Group>
      <Input
        inline
        label="Rotations"
        // icon="stopwatch"
        position="left"
        control="input"
        placeholder="rotations"
        type="text"
        name="rotations"
        value={props.rotations}
        onChange={props.handleChange}
      />
    </Form.Group>
  );
};

export default RotationInput;
