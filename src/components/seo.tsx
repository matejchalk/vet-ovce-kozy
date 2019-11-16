import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain';
import { LANG } from '../constants';
import { SiteMetadataQuery } from '../types/graphql';
import { forceEndingPeriod } from '../utils';

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
  const description = forceEndingPeriod(
    props.description || defaultDescription
  );
  const keywords = [...(props.keywords || []), ...defaultKeywords].join(', ');
  const url = `${siteUrl}${props.path || ''}`;
  const image =
    props.image || `${siteUrl}${require(`../images/${defaultImage}`)}`;
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
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:locale" content={LANG} />
      {/*TODO: <meta property="og:image:alt" content="Alt test for image" />*/}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/*TODO: <meta name="twitter:image:alt" content="Alt text for image" />*/}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
