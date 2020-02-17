import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import { FaFacebookSquare, FaLocationArrow } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { oc } from 'ts-optchain';
import { FACEBOOK_URL, GOOGLE_MAPS_URL } from '../constants';
import { FooterQuery } from '../types/graphql';
import i18n from '../i18n.json';
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
        members {
          name
          phoneNumber
          email
        }
      }
    }
  `);

  const address = oc(contentfulContactPage).address({});
  const name = oc(contentfulContactPage).members[0].name();
  const phoneNumber = oc(contentfulContactPage).members[0].phoneNumber();
  const email = oc(contentfulContactPage).members[0].email();

  const {
    buttons: { facebook },
  } = i18n;

  return (
    <footer className={styles.footer}>
      <div className={styles.contactLinks}>
        <span className={styles.contactName}>{name}:</span>
        <span className={styles.contactLink}>
          <MdPhone className={styles.linkIcon} />
          <OutboundLink href={`tel:${phoneNumber}`}>{phoneNumber}</OutboundLink>
        </span>
        <span className={styles.contactLink}>
          <MdEmail className={styles.linkIcon} />
          <OutboundLink href={`mailto:${email}`}>{email}</OutboundLink>
        </span>
      </div>
      <div className={styles.socialLinks}>
        <OutboundLink
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={facebook}
        >
          <FaFacebookSquare className={styles.facebookButton} />
        </OutboundLink>
      </div>
      <OutboundLink
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.location}
      >
        <FaLocationArrow className={styles.mapsButton} />
        <div className={styles.address}>
          <span>{address.street}</span>
          <span>{address.city}</span>
          <span>{address.postCode}</span>
        </div>
      </OutboundLink>
    </footer>
  );
};

export default Footer;
