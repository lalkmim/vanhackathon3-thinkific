/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
// import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

import messages from './messages';

const StyledNavbar = styled(Navbar)`
  background-color: #1b9eea;
  height: 30px;
`;

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <StyledNavbar>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to={{ pathname: '/' }}><FormattedMessage {...messages.header} /></LinkContainer>
              {/* <LinkContainer to={{ pathname: '/' }}><Image src="/assets/images/thinkific_logo.png" /></LinkContainer> */}
            </Navbar.Brand>
          </Navbar.Header>
          {/* <Nav pullRight>
            <LinkContainer to={{ pathname: '/' }}>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/register' }}>
              <NavItem eventKey={2}>Register</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/login' }}>
              <NavItem eventKey={3}>Login</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/builder' }}>
              <NavItem eventKey={4}>Builder</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/logoff' }}>
              <NavItem eventKey={5}>Logoff</NavItem>
            </LinkContainer>
          </Nav> */}
        </StyledNavbar>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
