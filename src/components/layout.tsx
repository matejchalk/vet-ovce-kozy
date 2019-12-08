import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import Footer from './footer';
import SEO from './seo';
import '../styles/global.scss';
import { SiteTitleQuery } from '../types/graphql';
import Header from './header';

type Props = {
  children: React.ReactNode;
  seo?: SEOProps;
};

const Layout = ({ children, seo }: Props) => {
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
      <SEO {...seo} />
      <Header siteTitle={oc(site).siteMetadata.title('')} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
