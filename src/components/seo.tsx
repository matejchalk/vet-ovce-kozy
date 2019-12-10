import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { Article, WebPage, WithContext } from 'schema-dts';
import { oc } from 'ts-optchain';
import { LANG } from '../constants';
import { SiteMetadataQuery } from '../types/graphql';
import { forceEndingPeriod } from '../utils';

const SEO = (props: SEOProps) => {
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
  const imageSrc =
    oc(props).image.src() ||
    `${siteUrl}${require(`../images/${defaultImage}`)}`;
  const imageAlt = oc(props).image.alt() || defaultTitle;
  const type = props.isArticle ? 'article' : 'website';

  const websiteSchema: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage', // TODO: other types?
    name: defaultTitle,
    ...(title && { headline: title }),
    inLanguage: LANG,
    url,
    mainEntityOfPage: url,
    ...(description && { description }),
    image: {
      '@type': 'ImageObject',
      url: imageSrc,
    },
  };

  const articleSchema: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    ...(props.author && {
      author: {
        '@type': 'Person',
        name: props.author,
      },
    }),
    ...(props.datePublished && { datePublished: props.datePublished }),
    ...(description && { description }),
    ...(title && { headline: title, name: title }),
    inLanguage: LANG,
    image: {
      '@type': 'ImageObject',
      url: imageSrc,
    },
    url,
    mainEntityOfPage: url,
  };

  const schema = props.isArticle ? articleSchema : websiteSchema;

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
      <meta property="og:image" content={imageSrc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:locale" content={LANG} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageSrc} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;
