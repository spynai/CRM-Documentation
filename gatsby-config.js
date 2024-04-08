require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Fithub`,
    description: `Evolve your Fitness With the Power of AI`,
    keywords: ['fitness', 'workout', 'AI workout', 'computer vision'],
    siteUrl: `https://www.aifithub.com/`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N8WR6H5",
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        routeChangeEventName: "route-change",
        enableWebVitalsTracking: true
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.js`),
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fithub`,
        short_name: `Fithub`,
        start_url: `/`,
        background_color: `#000000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.webp`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Orbitron`
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: "gatsby-plugin-firebase-v9.0",
      options: {
        credentials: {
          apiKey: "AIzaSyCv5GtzEFHFfPoTgT-oL8TPcCGgc3TqZuM",
          authDomain: "chat-6f260.firebaseapp.com",
          projectId: "chat-6f260"
        }
      }
    }
  ],
}
