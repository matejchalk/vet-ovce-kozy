import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import SEO from './seo';
import '../styles/global.scss';
import { SiteTitleQuery } from '../types/graphql';
import Header from './header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { site } = useStaticQuery<SiteTitleQuery>(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <SEO />
      <Header siteTitle={oc(site).siteMetadata.title('')} />
      {children}
    </>
  );
};

export default Layout;
