/*
 *
 * RegisterPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class RegisterPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <span><FormattedMessage {...messages.header} /></span>
      </div>
    );
  }
}
