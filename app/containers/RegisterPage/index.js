/*
 *
 * RegisterPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Panel, Form, FormGroup, FormControl, Col, Button, ControlLabel } from 'react-bootstrap';

import messages from './messages';

export default class RegisterPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Panel header={<FormattedMessage {...messages.header} />}>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="name" placeholder="John Smith" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="j.smith@email.com" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalRepeatPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Repeat password
            </Col>
            <Col sm={10}>
              <FormControl type="repeat_password" placeholder="Repeat password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Panel>
    );
  }
}
