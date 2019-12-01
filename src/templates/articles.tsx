import { graphql } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import Button from '../components/button';
import Card from '../components/card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import i18n from '../i18n.json';
import { ArticlePreviewsQuery } from '../types/graphql';
import { getFluidImage } from '../utils';
import styles from './articles.module.scss';

type Props = {
  data: ArticlePreviewsQuery;
  pageContext: {
    pageNumber: number;
    humanPageNumber: number;
    skip: number;
    limit: number;
    numberOfPages: number;
    previousPagePath?: string;
    nextPagePath?: string;
  };
  location: Location;
};

const ArticlesPage = ({
  data: { allContentfulArticle },
  pageContext: { humanPageNumber, previousPagePath, nextPagePath },
  location: { pathname },
}: Props) => {
  const {
    pages: {
      articles: { title },
    },
    headings: { articles },
    buttons: { read, previous, next },
    other: { continued },
  } = i18n;

  const pageTitle =
    humanPageNumber <= 1 ? articles : `${articles} (${continued})`;

  return (
    <Layout>
      <SEO title={title} path={pathname} />
      <section className={styles.section}>
        <h1 className={styles.title}>{pageTitle}</h1>
        <ul className={styles.previews}>
          {oc(allContentfulArticle)
            .edges([])
            .map(({ node: { slug, title: articleTitle, category } }, index) => (
              <li key={slug || index} className={styles.preview}>
                <Card
                  title={articleTitle || ''}
                  image={getFluidImage(oc(category).image())}
                  link={{ text: read, path: `/${slug}` }}
                  className={styles.card}
                />
              </li>
            ))}
        </ul>
        <nav className={styles.nav}>
          {previousPagePath && (
            <Button
              text={previous}
              path={previousPagePath}
              className={styles.button}
            />
          )}
          {nextPagePath && (
            <Button text={next} path={nextPagePath} className={styles.button} />
          )}
        </nav>
      </section>
    </Layout>
  );
};

export default ArticlesPage;

export const pageQuery = graphql`
  query ArticlePreviews($skip: Int!, $limit: Int!) {
    allContentfulArticle(
      sort: { fields: date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          slug
          title
          category {
            image {
              fluid(maxWidth: 750, maxHeight: 422, quality: 100) {
                src
                srcSet
                aspectRatio
                sizes
                base64
              }
            }
          }
        }
      }
    }
  }
`;
