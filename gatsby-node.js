const path = require('path');
const i18n = require('./src/i18n.json');
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allContentfulArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }

  result.data.allContentfulArticle.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve('src/templates/article.tsx'),
      context: { slug },
    });
  });

  paginate({
    createPage,
    items: result.data.allContentfulArticle.edges,
    itemsPerPage: 6,
    pathPrefix: `/${i18n.pages.articles.path}`,
    component: path.resolve('src/templates/articles.tsx'),
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  Object.entries(i18n.pages).forEach(([key, { path }]) => {
    if (page.path.replace(/\//g, '') === key) {
      deletePage(page);
      createPage({ ...page, path });
    }
  });
};
