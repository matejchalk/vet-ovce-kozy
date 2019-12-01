import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { oc } from 'ts-optchain';
import Layout from '../components/layout';
import { LANG } from '../constants';
import { ArticleDetailQuery } from '../types/graphql';
import {
  getFirstParagraphFromRichText,
  getFixedImage,
  getFluidImage,
} from '../utils';
import styles from './article.module.scss';

type Props = {
  data: ArticleDetailQuery;
  location: Location;
};

const ArticleTemplate = ({
  data: { contentfulArticle, allContentfulAsset },
  location: { pathname },
}: Props) => {
  const richTextDocument = oc(contentfulArticle).content.json();
  const richTextOptions: Options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong className={styles.bold}>{text}</strong>,
      [MARKS.ITALIC]: text => <em className={styles.italic}>{text}</em>,
      [MARKS.UNDERLINE]: text => <u className={styles.underline}>{text}</u>,
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={styles.paragraph}>{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className={styles.heading2}>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className={styles.heading3}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className={styles.heading4}>{children}</h4>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className={styles.orderedList}>{children}</ol>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={styles.unorderedList}>{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className={styles.listItem}>{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className={styles.quote}>{children}</blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // Contentful prefixes ID with 'c'
        const id = node.data.target.sys.id.substr(1);
        const asset = allContentfulAsset.edges.find(
          ({ node: { contentful_id } }) => contentful_id === id
        );
        if (asset == null) {
          return <></>;
        }
        return (
          <Img
            fluid={getFluidImage(asset.node)}
            alt={asset.node.description || ''}
            className={styles.embeddedAsset}
          />
        );
      },

      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.hyperlink}
        >
          {children}
        </a>
      ),
      [INLINES.ENTRY_HYPERLINK]: (node, children) => (
        <Link
          to={`/${node.data.target.fields.slug[LANG]}`}
          className={styles.entryHyperlink}
        >
          {children}
        </Link>
      ),
    },
  };

  const content = documentToReactComponents(richTextDocument, richTextOptions);

  const date =
    contentfulArticle &&
    contentfulArticle.date &&
    new Date(contentfulArticle.date).toLocaleDateString(LANG, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  const title = oc(contentfulArticle).title() || undefined;
  const image = oc(contentfulArticle).category.image();
  const description = getFirstParagraphFromRichText(richTextDocument);
  const categoryTitle = oc(contentfulArticle).category.title('');
  const keywords = categoryTitle ? [categoryTitle.toLowerCase()] : [];
  const author = oc(contentfulArticle).author.name('');
  const datePublished = oc(contentfulArticle).date() || undefined;

  const avatar = oc(contentfulArticle).author.avatar();
  const photo = oc(contentfulArticle).author.photo();

  return (
    <Layout
      seo={{
        title,
        description,
        keywords,
        image: {
          src: `https:${oc(image).fluid.src()}`,
          alt: oc(image).description() || categoryTitle,
        },
        path: pathname,
        isArticle: true,
        author,
        datePublished,
      }}
    >
      <section className={styles.section}>
        <article className={styles.article}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.author}>
            <Img
              fixed={getFixedImage(avatar || photo)}
              alt={
                (avatar ? avatar.description : oc(photo).description()) ||
                author
              }
              className={styles.authorAvatar}
            />
            <div>
              <div className={styles.authorName}>{author}</div>
              <div className={styles.date}>{date}</div>
            </div>
          </div>
          <Img
            fluid={getFluidImage(image)}
            alt={oc(image).description() || categoryTitle}
          />
          <main className={styles.content}>{content}</main>
        </article>
      </section>
    </Layout>
  );
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query ArticleDetail($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      slug
      title
      category {
        title
        image {
          description
          fluid(maxWidth: 1050, quality: 100) {
            src
            srcSet
            aspectRatio
            sizes
            base64
          }
        }
      }
      author {
        name
        avatar {
          ...AuthorAvatar
        }
        photo {
          ...AuthorAvatar
        }
      }
      date
      content {
        json
      }
    }

    allContentfulAsset {
      edges {
        node {
          contentful_id
          description
          fluid(maxWidth: 650, quality: 100) {
            src
            srcSet
            aspectRatio
            sizes
            base64
          }
        }
      }
    }
  }

  fragment AuthorAvatar on ContentfulAsset {
    description
    fixed(width: 55, height: 55) {
      width
      height
      src
      srcSet
      base64
    }
  }
`;
