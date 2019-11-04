import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { oc } from 'ts-optchain';
import Button from '../components/button';
import Card from '../components/card';
import Layout from '../components/layout';
import { I18N } from '../i18n';
import { HomePageQuery } from '../types/graphql';
import { exists, getFluidImage } from '../utils';
import styles from './index.module.scss';

const IndexPage = () => {
  const { file, contentfulHomePage } = useStaticQuery<HomePageQuery>(graphql`
    query HomePage {
      file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            src
            srcSet
            aspectRatio
            sizes
            base64
          }
        }
      }
      contentfulHomePage {
        goals {
          title
          image {
            fluid {
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
  `);

  const {
    pages: {
      articles: { path: articlesPath },
      services: { path: servicesPath },
    },
    description,
    headings: { goals },
    buttons: { articles, services },
  } = I18N;

  return (
    <Layout>
      <BackgroundImage
        fluid={getFluidImage(oc(file).childImageSharp())}
        backgroundColor="#bacdba"
        Tag="section"
        className={styles.intro}
      >
        <h1 className={styles.introText}>{description}</h1>
        <Button
          text={articles}
          path={articlesPath}
          ripple="shade"
          className={styles.introButton}
        />
      </BackgroundImage>
      <section className={styles.goals}>
        <h2 className={styles.goalsTitle}>{goals}</h2>
        {oc(contentfulHomePage)
          .goals([])
          .filter(exists)
          .map(({ title, image }) => (
            <Card
              title={title || ''}
              image={getFluidImage(image)}
              className={styles.goalsCard}
            />
          ))}
        <Button
          text={services}
          path={servicesPath}
          ripple="shade"
          className={styles.goalsButton}
        />
      </section>
    </Layout>
  );
};

export default IndexPage;
