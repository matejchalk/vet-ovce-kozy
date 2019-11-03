import { Link } from 'gatsby';
import React from 'react';

import './button.scss';

type Props = {
  text: string;
  path: string;
  ripple?: 'tint' | 'shade';
};

const Button = ({ text, path, ripple = 'tint' }: Props) => (
  <Link to={path} className={`button ${ripple}`}>
    {text}
  </Link>
);

export default Button;
