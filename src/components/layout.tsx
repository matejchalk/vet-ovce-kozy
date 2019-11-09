import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain';
import { SiteTitleQuery } from '../types/graphql';

import Header from './header';

import '../styles/global.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: SiteTitleQuery) => (
      <>
        <Helmet
          title={oc(data).site.siteMetadata.title('')}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={oc(data).site.siteMetadata.title('')} />
        {children}
      </>
    )}
  />
);

export default Layout;
