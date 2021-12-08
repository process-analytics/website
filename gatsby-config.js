/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const colors = require('./src/theme/colors.json');

// Only the variables prefixed by 'GATSBY_' can be available in browser code
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const robotsPolicy = { userAgent: '*' };
process.env.GATSBY_ROBOTS_ENABLED === 'true'
  ? (robotsPolicy.allow = '/')
  : (robotsPolicy.disallow = ['/']);

module.exports = {
  siteMetadata: {
    title: 'Process Analytics',
    siteUrl: 'https://process-analytics.dev',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Process Analytics',
        start_url: '/',
        background_color: colors.background,
        theme_color: colors.primary,
        display: 'minimal-ui',
        icon: 'src/images/logo.svg',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: { policy: [robotsPolicy] },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GATSBY_GA_MEASUREMENT_ID, // Google Analytics
        ],
        // This object gets passed directly to the gtag config command
        gtagConfig: {
          // see https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/#the-gtagconfiganonymize_ip-option
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Google Global Site Tag will not be loaded at all for visitors that have “Do Not Track” enabled.
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://gmail.us20.list-manage.com/subscribe/post?u=98bed213911ed14e04f519b82&amp;id=9c27a4ee73',
        timeout: 3500, //the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
};
