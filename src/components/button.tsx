import { Link } from 'gatsby';
import React from 'react';

import styles from './button.module.scss';

type Props = {
  text: string;
  path: string;
  ripple?: 'tint' | 'shade';
  className?: string;
};

const Button = ({ text, path, ripple = 'shade', className }: Props) => (
  <Link to={path} className={`${styles.button} ${styles[ripple]} ${className}`}>
    {text}
  </Link>
);

export default Button;
