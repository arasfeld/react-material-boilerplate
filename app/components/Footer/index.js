import React from 'react';
import { FormattedMessage } from 'react-intl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Section from './Section';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <AppBar position="static" color="default">
        <Toolbar>
          <Section>
            <FormattedMessage {...messages.licenseMessage} />
          </Section>
          <Section>
            <LocaleToggle />
          </Section>
          <Section>
            <FormattedMessage
              {...messages.authorMessage}
              values={{
                author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
              }}
            />
          </Section>
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
}

export default Footer;
