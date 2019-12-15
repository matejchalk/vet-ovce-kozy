import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import Button from './button';
import styles from './card.module.scss';

type Props = {
  image?: {
    fluid: FluidObject;
    alt?: string;
  };
  title?: string;
  children?: React.ReactNode;
  link?: {
    text: string;
    path: string;
  };
  className?: string;
  align?: 'top' | 'stretch';
};

const Card = ({
  image,
  title,
  children,
  link,
  className,
  align = 'stretch',
}: Props) => (
  <div
    className={`${styles.card} ${className} ${align === 'stretch' &&
      styles.stretch}`}
  >
    {image && <Img fluid={image.fluid} alt={image.alt || title} />}
    {title && <span className={styles.title}>{title}</span>}
    {children && <div className={styles.children}>{children}</div>}
    {link && (
      <div className={styles.buttonWrapper}>
        <Button text={link.text} path={link.path} ripple="tint" />
      </div>
    )}
  </div>
);

export default Card;
