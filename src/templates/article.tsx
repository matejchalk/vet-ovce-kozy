import { graphql } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import Layout from '../components/layout';
import { ArticleDetailQuery } from '../types/graphql';

type Props = {
  data: ArticleDetailQuery;
};

const ArticleTemplate = ({ data }: Props) => {
  return (
    <Layout>
      <h1>{oc(data).contentfulArticle.title()}</h1>
    </Layout>
  );
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query ArticleDetail($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      slug
      title
      category {
        image {
          fluid(quality: 100) {
            src
            srcSet
            aspectRatio
            sizes
            base64
          }
        }
      }
      author {
        name
        avatar {
          fixed {
            width
            height
            src
            srcSet
          }
        }
      }
      date
      content {
        json
      }
    }
  }
`;
