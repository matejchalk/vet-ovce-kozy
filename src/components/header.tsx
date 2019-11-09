import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { oc } from 'ts-optchain';
import i18n from '../i18n.json';
import { LogoQuery } from '../types/graphql';
import { getFixedImage } from '../utils';

import styles from './header.module.scss';

type Props = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Props) => {
  const { file } = useStaticQuery<LogoQuery>(graphql`
    query Logo {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 90) {
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `);

  const { about, services, articles, contact } = i18n.pages;
  const pages = [about, services, articles, contact];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={'/'}>
          <Img
            fixed={getFixedImage(oc(file).childImageSharp())}
            alt={siteTitle}
          />
        </Link>
      </div>
      <input id="menu-toggle" type="checkbox" className={styles.input} />
      <label htmlFor="menu-toggle" className={`${styles.label} ${styles.open}`}>
        <MdMenu />
      </label>
      <label
        htmlFor="menu-toggle"
        className={`${styles.label} ${styles.close}`}
      >
        <MdClose />
      </label>
      <nav className={styles.nav}>
        {pages.map(({ title, path }) => (
          <Link
            key={path}
            to={`/${path}`}
            className={styles.link}
            activeClassName={styles.active}
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
