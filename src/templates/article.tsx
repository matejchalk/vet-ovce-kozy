import { graphql } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { ArticleDetailQuery } from '../types/graphql';
import { getFixedImage, getFluidImage } from '../utils';
import styles from './article.module.scss';

type Props = {
  data: ArticleDetailQuery;
};

const ArticleTemplate = ({ data: { contentfulArticle } }: Props) => {
  return (
    <Layout>
      <section className={styles.section}>
        <article className={styles.article}>
          <h1 className={styles.title}>{oc(contentfulArticle).title()}</h1>
          <div className={styles.author}>
            <Img
              fixed={getFixedImage(oc(contentfulArticle).author.avatar())}
              className={styles.authorAvatar}
            />
            <div>
              <div className={styles.authorName}>
                {oc(contentfulArticle).author.name()}
              </div>
              <div className={styles.date}>{oc(contentfulArticle).date()}</div>
            </div>
          </div>
          <Img fluid={getFluidImage(oc(contentfulArticle).category.image())} />
        </article>
      </section>
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
          fluid(maxWidth: 1050, quality: 100) {
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
          fixed(width: 55, height: 55) {
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
