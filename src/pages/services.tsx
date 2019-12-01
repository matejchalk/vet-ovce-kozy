import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { oc } from 'ts-optchain';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ServicesQuery } from '../types/graphql';
import { exists } from '../utils';
import { MdCheckCircle } from 'react-icons/md';
import i18n from '../i18n.json';
import styles from './services.module.scss';

type Props = {
  location: Location;
};

const ServicesPage = ({ location: { pathname } }: Props) => {
  const { contentfulServicesPage } = useStaticQuery<ServicesQuery>(graphql`
    query Services {
      contentfulServicesPage {
        services {
          title
          examples
        }
      }
    }
  `);

  const services = oc(contentfulServicesPage)
    .services([])
    .filter(exists);

  const {
    headings: { services: heading },
    pages: {
      services: { title },
    },
  } = i18n;

  const serviceTitles = services
    .map(service => service.title)
    .filter(exists)
    .map(serviceTitle => serviceTitle.toLowerCase());
  const description = `${heading} - ${serviceTitles.join(', ')}`;
  const keywords = [title.toLowerCase()];

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        path={pathname}
        keywords={keywords}
      />
      <section className={styles.section}>
        <h1 className={styles.title}>{heading}</h1>
        <ul className={styles.services}>
          {services.map(({ title: serviceTitle, examples }) => (
            <li className={styles.service}>
              <MdCheckCircle className={styles.serviceCheck} />
              {serviceTitle}
              {examples && examples.length > 0 && (
                <ul className={styles.examples}>
                  {(examples || [])
                    .filter((example): example is string => !!example)
                    .map(example => (
                      <li className={styles.example}>
                        <MdCheckCircle className={styles.exampleCheck} />
                        {example}
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default ServicesPage;
