import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain';
import { LANG } from './constants';
import { SiteMetadataQuery } from './types/graphql';

type Props = {
  title?: string;
  image?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  isArticle?: boolean;
};

const SEO = (props: Props) => {
  const { site } = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          defaultKeywords: keywords
          siteUrl: url
          defaultImage: image
        }
      }
    }
  `);

  const defaultTitle = oc(site).siteMetadata.defaultTitle('');
  const titleTemplate = oc(site).siteMetadata.titleTemplate('');
  const defaultDescription = oc(site).siteMetadata.defaultDescription('');
  const defaultKeywords = oc(site).siteMetadata.defaultKeywords([]);
  const siteUrl = oc(site).siteMetadata.siteUrl('');
  const defaultImage = oc(site).siteMetadata.defaultImage('');

  const title = props.title;
  const description = props.description || defaultDescription;
  const keywords = [...(props.keywords || []), ...defaultKeywords].join(', ');
  const url = `${siteUrl}${props.path || '/'}`;
  const image = props.image || defaultImage;
  const type = props.isArticle ? 'article' : 'website';

  return (
    <Helmet
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={titleTemplate}
    >
      <html lang={LANG} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default SEO;
