import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { oc } from 'ts-optchain';
import { LogoQuery } from '../types/graphql';
import { getFixedImage } from '../utils';

type Props = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <StaticQuery
        query={graphql`
          query Logo {
            file(relativePath: { eq: "logo.png" }) {
              childImageSharp {
                fixed(width: 100) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        `}
        render={(data: LogoQuery) => (
          <Img
            fixed={getFixedImage(oc(data).file.childImageSharp())}
            alt={'Logo'}
          />
        )}
      />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
