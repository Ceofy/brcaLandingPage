import React from 'react';
import PropTypes from 'prop-types';

import LinkOut from './linkOut';

import ccmi from '../images/ccmi.png';
import styles from './componentStyles/logoHeader.module.css';

const LogoHeader = ({ siteTitle }) => (
  <header className={styles.header}>
    <LinkOut link='https://ccmi.org/'>
      <img src={ccmi} alt='CCMI Logo' className={styles.logo} />
    </LinkOut>
    <span className={styles.content}>
      <LinkOut
        className={styles.underlineLink}
        link='https://www.ucsf.edu/about'
      >
        UC San Francisco
      </LinkOut>
      <LinkOut
        className={styles.noUnderlineLink}
        link='http://idekerlab.ucsd.edu'
      >
        {' - '}
      </LinkOut>
      <LinkOut
        className={styles.underlineLink}
        link='https://kroganlab.ucsf.edu/krogan-lab'
      >
        Krogan Lab
      </LinkOut>
    </span>
  </header>
);

LogoHeader.propTypes = {
  siteTitle: PropTypes.string,
};

LogoHeader.defaultProps = {
  siteTitle: ``,
};

export default LogoHeader;
