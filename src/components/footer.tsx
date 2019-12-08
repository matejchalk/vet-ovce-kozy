import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { oc } from 'ts-optchain';
import { FACEBOOK_URL } from '../constants';
import { FooterQuery } from '../types/graphql';
import styles from './footer.module.scss';

const Footer = () => {
  const { contentfulContactPage } = useStaticQuery<FooterQuery>(graphql`
    query Footer {
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

  const address = oc(contentfulContactPage).address({});
  const phoneNumber = oc(contentfulContactPage).phoneNumber();
  const email = oc(contentfulContactPage).email();

  return (
    <footer className={styles.footer}>
      <div className={styles.contactLinks}>
        <span className={styles.contactLink}>
          <MdPhone className={styles.linkIcon} />
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </span>
        <span className={styles.contactLink}>
          <MdEmail className={styles.linkIcon} />
          <a href={`mailto:${email}`}>{email}</a>
        </span>
      </div>
      <div className={styles.socialLinks}>
        <a href={FACEBOOK_URL}>
          <FaFacebookSquare className={styles.facebookButton} />
        </a>
      </div>
      <div className={styles.address}>
        <span>{address.street}</span>
        <span>{address.city}</span>
        <span>{address.postCode}</span>
      </div>
    </footer>
  );
};

export default Footer;
