import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import Button from './button';
import styles from './card.module.scss';

type Props = {
  image?: {
    fluid: FluidObject;
    alt?: string;
  };
  title: string;
  link?: {
    text: string;
    path: string;
  };
  className?: string;
};

const Card = ({ image, title, link, className }: Props) => (
  <div className={`${styles.card} ${className}`}>
    {image && <Img fluid={image.fluid} alt={image.alt || title} />}
    <span className={styles.title}>{title}</span>
    {link && (
      <div className={styles.buttonWrapper}>
        <Button text={link.text} path={link.path} ripple="tint" />
      </div>
    )}
  </div>
);

export default Card;
