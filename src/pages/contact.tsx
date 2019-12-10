import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';
import { oc } from 'ts-optchain';
import Layout from '../components/layout';
import { FACEBOOK_URL, GOOGLE_MAPS_EMBED_SRC } from '../constants';
import { ContactPageQuery } from '../types/graphql';
import i18n from '../i18n.json';
import styles from './contact.module.scss';

type Props = {
  location: Location;
};

const ContactPage = ({ location: { pathname } }: Props) => {
  const { contentfulContactPage } = useStaticQuery<ContactPageQuery>(graphql`
    query ContactPage {
      contentfulContactPage {
        address {
          street
          city
          postCode
        }
        phoneNumber
        email
      }
    }
  `);

  const contact = {
    address: oc(contentfulContactPage).address({}),
    phoneNumber: oc(contentfulContactPage).phoneNumber(),
    email: oc(contentfulContactPage).email(),
  };

  const {
    headings: { contact: heading },
    pages: {
      contact: { title },
    },
    contact: { postCode, address, phoneNumber, email },
    buttons: { facebook },
  } = i18n;

  const fullAddress = [
    contact.address.street,
    contact.address.city,
    contact.address.postCode,
  ].join(', ');
  const description = `${heading}. ${address}: ${fullAddress}. ${phoneNumber}: ${contact.phoneNumber}. ${email}: ${contact.email}`;
  const keywords = [title.toLowerCase()];

  return (
    <Layout seo={{ title, description, path: pathname, keywords }}>
      <section className={styles.section}>
        <h1 className={styles.title}>{heading}</h1>
        <main className={styles.contact}>
          <iframe
            src={GOOGLE_MAPS_EMBED_SRC}
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            className={styles.map}
          />
          <div className={styles.texts}>
            <div title={address} className={styles.address}>
              <span>{contact.address.street}</span>
              <span>{contact.address.city}</span>
              <span>{`${postCode}: ${contact.address.postCode}`}</span>
            </div>
            <div className={styles.links}>
              <span title={phoneNumber}>
                <MdPhone className={styles.linkIcon} />
                <a href={`tel:${contact.phoneNumber}`} className={styles.link}>
                  {contact.phoneNumber}
                </a>
              </span>
              <span title={email}>
                <MdEmail className={styles.linkIcon} />
                <a href={`mailto:${contact.email}`} className={styles.link}>
                  {contact.email}
                </a>
              </span>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.facebookButton}
              >
                <FaFacebook className={styles.facebookIcon} />
                <span>{facebook}</span>
              </a>
            </div>
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default ContactPage;
