import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { Article, WebPage, WithContext } from 'schema-dts';
import { oc } from 'ts-optchain';
import { CONTENTFUL_IMAGE_CDN, LANG } from '../constants';
import { SiteMetadataQuery } from '../types/graphql';
import { forceEndingPeriod } from '../utils';

const IMAGE_WIDTH = 1080;

const SEO = (props: SEOProps) => {
  const { site } = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteTitle: title
          titleTemplate
          siteDescription: description
          siteKeywords: keywords
          siteUrl: url
          siteImage: image
        }
      }
    }
  `);

  const siteTitle = oc(site).siteMetadata.siteTitle('');
  const titleTemplate = oc(site).siteMetadata.titleTemplate('');
  const siteDescription = oc(site).siteMetadata.siteDescription('');
  const siteKeywords = oc(site).siteMetadata.siteKeywords([]);
  const siteUrl = oc(site).siteMetadata.siteUrl('');
  const siteImage = oc(site).siteMetadata.siteImage('');
  const siteImageSrc = `${siteUrl}${require(`../images/${siteImage}`)}`;

  const title = props.title;
  const description = forceEndingPeriod(props.description || siteDescription);
  const keywords = [...(props.keywords || []), ...siteKeywords].join(', ');
  const url = `${siteUrl}${props.path || ''}`;
  const imageSrc = oc(props).image.src() || siteImageSrc;
  const imageAlt = oc(props).image.alt() || siteTitle;
  const imageWidth = IMAGE_WIDTH;
  const imageHeight = Math.round(imageWidth / oc(props).image.aspectRatio(1));
  const type = props.isArticle ? 'article' : 'website';

  const websiteSchema: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage', // TODO: other types?
    name: siteTitle,
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
    ...(props.dateModified && { dateModified: props.dateModified }),
    ...(description && { description }),
    ...(title && { headline: title, name: title }),
    inLanguage: LANG,
    image: {
      '@type': 'ImageObject',
      url: imageSrc,
    },
    url,
    mainEntityOfPage: url,
    publisher: {
      '@type': 'Organization',
      name: siteTitle,
      logo: {
        '@type': 'ImageObject',
        url: siteImageSrc,
      },
    },
  };

  const schema = props.isArticle ? articleSchema : websiteSchema;
  const twitterCard = props.isArticle ? 'summary_large_image' : 'summary';

  return (
    <Helmet
      title={title}
      defaultTitle={siteTitle}
      titleTemplate={titleTemplate}
    >
      <html lang={LANG} />
      <link rel="preconnect" href={CONTENTFUL_IMAGE_CDN} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageSrc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content={LANG} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageSrc} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;
