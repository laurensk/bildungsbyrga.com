import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto:hello@bildungsbyrga.com">Contact</a>
        </li>
        <li>
          <a href="https://legal.laurensk.at/imprint/?lang=en">Imprint</a>
        </li>
        <li>
          <a href="https://legal.laurensk.at/privacy-policy/?lang=en">Privacy Policy</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;