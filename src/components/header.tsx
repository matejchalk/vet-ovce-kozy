import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { oc } from 'ts-optchain';
import { I18N } from '../i18n';
import { LogoQuery } from '../types/graphql';
import { getFixedImage } from '../utils';

import './header.scss';

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

  const { about, services, articles, contact } = I18N.pages;
  const pages = [about, services, articles, contact];

  return (
    <header>
      <div className="logo">
        <Link to={'/'}>
          <Img
            fixed={getFixedImage(oc(file).childImageSharp())}
            alt={siteTitle}
          />
        </Link>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label htmlFor="menu-toggle" className="open">
        <MdMenu />
      </label>
      <label htmlFor="menu-toggle" className="close">
        <MdClose />
      </label>
      <nav>
        {pages.map(({ title, path }) => (
          <Link to={`/${path}`} activeClassName="active">
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
