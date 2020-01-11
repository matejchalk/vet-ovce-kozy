import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { oc } from 'ts-optchain';
import Card from '../components/card';
import Layout from '../components/layout';
import i18n from '../i18n.json';
import { AboutPageQuery } from '../types/graphql';
import { exists, getFluidImage } from '../utils';
import styles from './about.module.scss';

type Props = {
  location: Location;
};

const AboutPage = ({ location: { pathname } }: Props) => {
  const { file, contentfulAboutPage } = useStaticQuery<AboutPageQuery>(graphql`
    query AboutPage {
      file(relativePath: { eq: "team.jpg" }) {
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
      contentfulAboutPage {
        teamMembers {
          name
          description {
            childMarkdownRemark {
              html
            }
          }
          photo {
            title
            fluid(maxWidth: 345, maxHeight: 345, quality: 100) {
              src
              srcSet
              aspectRatio
              sizes
              base64
            }
          }
          email
          phoneNumber
        }
      }
    }
  `);

  const {
    pages: {
      about: { title },
    },
    aboutUs,
    headings: { team },
  } = i18n;

  return (
    <Layout
      seo={{
        title,
        description: aboutUs,
        path: pathname,
        keywords: [title.toLowerCase()],
      }}
    >
      <BackgroundImage
        fluid={getFluidImage(oc(file).childImageSharp())}
        backgroundColor="#bacdba"
        Tag="section"
        className={styles.intro}
      >
        <h1 className={styles.introText}>{aboutUs}</h1>
      </BackgroundImage>
      <section className={styles.team}>
        <h2 className={styles.teamTitle}>{team}</h2>
        <ul className={styles.teamCards}>
          {oc(contentfulAboutPage)
            .teamMembers([])
            .filter(exists)
            .map(({ name, description, photo, email, phoneNumber }, index) => {
              const fluid = getFluidImage(photo);
              return (
                <li key={index}>
                  <Card
                    image={
                      fluid && {
                        fluid,
                        alt: (photo && photo.title) || undefined,
                      }
                    }
                    align="top"
                  >
                    <h3 className={styles.name}>{name}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: oc(description).childMarkdownRemark.html(''),
                      }}
                      className={styles.description}
                    />
                    {phoneNumber && email && (
                      <div className={styles.links}>
                        {phoneNumber && (
                          <span>
                            <MdPhone className={styles.linkIcon} />
                            <a
                              href={`tel:${phoneNumber}`}
                              className={styles.link}
                            >
                              {phoneNumber}
                            </a>
                          </span>
                        )}
                        {email && (
                          <span>
                            <MdEmail className={styles.linkIcon} />
                            <a href={`mailto:${email}`} className={styles.link}>
                              {email}
                            </a>
                          </span>
                        )}
                      </div>
                    )}
                  </Card>
                </li>
              );
            })}
        </ul>
      </section>
    </Layout>
  );
};

export default AboutPage;
