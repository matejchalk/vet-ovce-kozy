const path = require('path');

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
