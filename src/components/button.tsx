import { Link } from 'gatsby';
import React from 'react';

import styles from './button.module.scss';

type Props = {
  text: string;
  path: string;
  ripple?: 'tint' | 'shade';
};

const Button = ({ text, path, ripple = 'tint' }: Props) => (
  <Link to={path} className={`${styles.button} ${styles[ripple]}`}>
    {text}
  </Link>
);

export default Button;
