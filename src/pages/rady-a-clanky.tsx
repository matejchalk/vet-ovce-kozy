import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import Button from '../components/button';
import Card from '../components/card';
import Layout from '../components/layout';
import { I18N } from '../i18n';
import { ArticlesQuery } from '../types/graphql';
import { getFluidImage } from '../utils';

import styles from './rady-a-clanky.module.scss';

const ArticlesPage = () => {
  const { allContentfulArticle } = useStaticQuery<ArticlesQuery>(graphql`
    query Articles {
      allContentfulArticle(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            title
            category {
              image {
                fluid(maxWidth: 210, maxHeight: 158, quality: 100) {
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
  `);

  const {
    headings: { articles },
    buttons: { read, loadMore },
  } = I18N;

  return (
    <Layout>
      <section className={styles.wrapper}>
        <h1 className={styles.title}>{articles}</h1>
        <ul className={styles.cards}>
          {oc(allContentfulArticle)
            .edges([])
            .map(({ node: { slug, title, category } }, index) => (
              <li key={slug || index}>
                <Card
                  title={title || ''}
                  image={getFluidImage(oc(category).image())}
                  link={{ text: read, path: `/${slug}` }}
                />
              </li>
            ))}
        </ul>
        <Button text={loadMore} path={'/'} className={styles.button} />
      </section>
    </Layout>
  );
};

export default ArticlesPage;
