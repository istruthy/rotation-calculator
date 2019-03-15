import React from 'react';
import { Form, Field, Button, Divider, Segment, Grid, Column } from 'semantic-ui-react';
const TimerCleanupInput = props => {
  return (
    <Grid centered columns={4}>
      <Grid.Column>
        <Form size="large" key="large">
          <Form.Group>
            <Form.Field inline label="Clean Up" control="input" placeholder="Cleanup" value="1" />
          </Form.Group>
          {/* <Button type="submit">Submit</Button> */}
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default TimerCleanupInput;
