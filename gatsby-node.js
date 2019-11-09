const path = require('path');
const i18n = require('./src/i18n.json');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve('src/templates/article.tsx');
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
      component: articleTemplate,
      context: { slug },
    });
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
