import React from 'react';
import '../styles/global.scss';
import Footer from './footer';
import Header from './header';
import SEO from './seo';

type Props = {
  children: React.ReactNode;
  seo?: SEOProps;
};

const Layout = ({ children, seo }: Props) => {
  return (
    <>
      <SEO {...seo} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
