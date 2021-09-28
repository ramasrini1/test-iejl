// eslint-disable-next-line no-unused-vars
const path = require(`path`);
const config = require(`./data/site-config`);

const activeEnv =
  process.env.GATSBY_ENV || process.env.NODE_ENV || `development`;
// eslint-disable-next-line no-console
console.log(`Using environment config: '${activeEnv}'`);

require(`dotenv`).config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.desc,
    author: `Hakkei`,
    copyright: config.copyright,
  },
  flags: { FAST_REFRESH: true, FAST_DEV: true },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout`),
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `legal`,
        path: `${__dirname}/content/footer-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2f415d`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              maxWidth: 800,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframerder: true,
            },
          },
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
              /**
               * One convention is to place your Netlify CMS customization code in a
               * `src/cms` directory.
               */
              modulePath: `${__dirname}/src/cms/cms.js`,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://hakkei.us7.list-manage.com/subscribe/post?u=636aa4d2726efea3227c9d60e&amp;id=e8d80c7796",
        timeout: 35000,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-192280165-1",
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
