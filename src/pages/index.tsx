import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { oc } from 'ts-optchain';
import Button from '../components/button';
import Layout from '../components/layout';
import { I18N } from '../i18n';
import { BackgroundImageQuery } from '../types/graphql';
import { getFluidImage } from '../utils';
import styles from './index.module.scss';

const IndexPage = () => {
  const { file } = useStaticQuery<BackgroundImageQuery>(graphql`
    query BackgroundImage {
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
    }
  `);

  const {
    description,
    buttons: { articles },
    pages: {
      articles: { path },
    },
  } = I18N;

  return (
    <Layout>
      <BackgroundImage
        fluid={getFluidImage(oc(file).childImageSharp())}
        backgroundColor="#bacdba"
        Tag="section"
        className={styles.intro}
      >
        <h1 className={styles.heading}>{description}</h1>
        <Button
          text={articles}
          path={path}
          ripple="shade"
          className={styles.button}
        />
      </BackgroundImage>
    </Layout>
  );
};

export default IndexPage;
