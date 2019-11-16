if (process.env.ENVIROMENT !== 'production') {
  require('dotenv').config();
}

const i18n = require('./src/i18n.json');

const APP_NAME = 'VetOvceKozy';
const APP_COLOR = '#64af5f';

const contentfulConfig = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
};

module.exports = {
  siteMetadata: {
    title: APP_NAME,
    titleTemplate: `%s | ${APP_NAME}`,
    description: i18n.description,
    keywords: i18n.keywords,
    url: process.env.URL,
    image: 'logo.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: APP_NAME,
        short_name: APP_NAME,
        start_url: '/',
        background_color: APP_COLOR,
        theme_color: APP_COLOR,
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-plugin-emotion',
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/styles'],
      },
    },
    'gatsby-plugin-extract-schema',
  ],
};
