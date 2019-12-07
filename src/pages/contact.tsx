import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { MdPhone, MdEmail } from 'react-icons/md';
import { oc } from 'ts-optchain';
import Layout from '../components/layout';
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
          <div title={address} className={styles.address}>
            <span>{contact.address.street}</span>
            <span>{contact.address.city}</span>
            <span>{`${postCode}: ${contact.address.postCode}`}</span>
          </div>
          <div className={styles.links}>
            <span title={phoneNumber}>
              <MdPhone className={styles.linkIcon} />
              <a href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a>
            </span>
            <span title={email}>
              <MdEmail className={styles.linkIcon} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </span>
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default ContactPage;
