import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import Button from './button';

import styles from './card.module.scss';

type Props = {
  image?: FluidObject;
  title: string;
  link?: {
    text: string;
    path: string;
  };
};

const Card = ({ image, title, link }: Props) => (
  <div className={styles.card}>
    <Img fluid={image} />
    <span className={styles.title}>{title}</span>
    {link && (
      <div className={styles.buttonWrapper}>
        <Button text={link.text} path={link.path} />
      </div>
    )}
  </div>
);

export default Card;
