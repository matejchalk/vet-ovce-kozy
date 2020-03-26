if (process.env.ENVIRONMENT !== 'production') {
  require('dotenv').config();
}

const i18n = require('./src/i18n.json');

const APP_NAME = 'VetOvceKozy';
const APP_COLOR = '#64af5f';

module.exports = {
  siteMetadata: {
    title: APP_NAME,
    titleTemplate: `%s · ${APP_NAME}`,
    description: i18n.description,
    keywords: i18n.keywords,
    url: process.env.URL,
    image: 'icon.png',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-161904319-1',
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: process.env.URL,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: APP_NAME,
        short_name: APP_NAME,
        start_url: '/',
        background_color: APP_COLOR,
        theme_color: APP_COLOR,
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
        icon_options: {
          purpose: 'maskable',
        },
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
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        useNameForId: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/styles'],
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        openAnalyzer: false,
      },
    },
    'gatsby-plugin-extract-schema',
  ],
};
