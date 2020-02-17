import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';
import { oc } from 'ts-optchain';
import Layout from '../components/layout';
import { FACEBOOK_URL, GOOGLE_MAPS_EMBED_SRC } from '../constants';
import { ContactPageQuery } from '../types/graphql';
import i18n from '../i18n.json';
import { exists, getFixedImage } from '../utils';
import Img from 'gatsby-image';
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
        members {
          id
          name
          phoneNumber
          email
          avatar {
            ...MemberAvatar
          }
          photo {
            ...MemberAvatar
          }
        }
      }
    }

    fragment MemberAvatar on ContentfulAsset {
      title
      fixed(width: 40, height: 40) {
        width
        height
        src
        srcSet
        base64
      }
    }
  `);

  const contact = {
    address: oc(contentfulContactPage).address({}),
    members: oc(contentfulContactPage).members([]),
  };

  const {
    headings: { contact: heading },
    pages: {
      contact: { title },
    },
    contact: { postCode, address, phoneNumber, email, map, memberContacts },
    buttons: { facebook },
  } = i18n;

  const fullAddress = [
    contact.address.street,
    contact.address.city,
    contact.address.postCode,
  ].join(', ');
  const contacts = contact.members
    .filter(exists)
    .map(
      member =>
        `${member.name} (${phoneNumber.toLowerCase()}: ${
          member.phoneNumber
        }, ${email.toLowerCase()}: ${member.email})`
    )
    .join(', ');
  const description = `${heading}. ${address}: ${fullAddress}. ${memberContacts}: ${contacts}.`;
  const keywords = [title.toLowerCase()];

  return (
    <Layout seo={{ title, description, path: pathname, keywords }}>
      <section className={styles.section}>
        <h1 className={styles.title}>{heading}</h1>
        <main className={styles.contact}>
          <iframe
            src={GOOGLE_MAPS_EMBED_SRC}
            title={map}
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            className={styles.map}
          />
          <div className={styles.texts}>
            <div className={styles.groupContact}>
              <div title={address} className={styles.address}>
                <span>{contact.address.street}</span>
                <span>{contact.address.city}</span>
                <span>{`${postCode}: ${contact.address.postCode}`}</span>
              </div>
              <OutboundLink
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.facebookButton}
              >
                <FaFacebook className={styles.facebookIcon} />
                <span>{facebook}</span>
              </OutboundLink>
            </div>
            <div className={styles.individualContacts}>
              {contact.members.filter(exists).map(member => (
                <div key={member.id} className={styles.individualContact}>
                  <div className={styles.member}>
                    <Img
                      fixed={getFixedImage(member.avatar || member.photo)}
                      alt={
                        oc(member).avatar.title() ||
                        oc(member).photo.title() ||
                        member.name ||
                        undefined
                      }
                      className={styles.avatar}
                    />
                    <span>{member.name}</span>
                  </div>
                  <span title={phoneNumber} className={styles.link}>
                    <MdPhone className={styles.linkIcon} />
                    <OutboundLink
                      href={`tel:${member.phoneNumber}`}
                      className={styles.linkText}
                    >
                      {member.phoneNumber}
                    </OutboundLink>
                  </span>
                  <span title={email} className={styles.link}>
                    <MdEmail className={styles.linkIcon} />
                    <OutboundLink
                      href={`mailto:${member.email}`}
                      className={styles.linkText}
                    >
                      {member.email}
                    </OutboundLink>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default ContactPage;
