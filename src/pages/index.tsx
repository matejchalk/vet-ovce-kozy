import { css } from 'emotion';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import { oc } from 'ts-optchain';

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
      <Link to="/page-2/">Go to page 2</Link>
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
