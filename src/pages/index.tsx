import { css } from 'emotion';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import { oc } from 'ts-optchain';
import Button from '../components/button';

import Layout from '../components/layout';
import { ArticlesQuery } from '../types/graphql';
import { getFixedImage } from '../utils';

const header = css({
  color: '#0505',
});

const IndexPage = () => {
  const {
    allContentfulArticle: { edges },
  } = useStaticQuery<ArticlesQuery>(graphql`
    query Articles {
      allContentfulArticle {
        edges {
          node {
            title
            author {
              name
            }
            category {
              image {
                fixed(width: 50, height: 50) {
                  src
                  srcSet
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1 className={header}>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div
        style={{
          padding: '50px 200px',
          background: 'linear-gradient(21.74deg, #5B4730 21.81%, #83781B 100%)',
        }}
      >
        <Button path="/page-2" text={'Go to page 2'} ripple="shade" />
      </div>
      <div
        style={{
          padding: '50px 200px',
        }}
      >
        <Button path="/page-2" text={'Go to page 2'} />
      </div>
      <ul>
        {edges.map(({ node: { title, author, category } }) => (
          <li>
            <Img fixed={getFixedImage(oc(category).image())} />
            <strong>{title}</strong> ({oc(author).name()})
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
